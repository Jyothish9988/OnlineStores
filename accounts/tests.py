from unittest import TestCase
from django.urls import reverse
from accounts.models import *
from rest_framework import status
from rest_framework.test import APITestCase
from accounts.models import Address
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from unittest import TestCase
from django.urls import reverse
from accounts.models import *
from rest_framework import status
from rest_framework.test import APITestCase
from accounts.models import Address, Product, Cart
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient

User = get_user_model()


# ------------------------------------Login Registration--------------------------------
class UserRegistrationViewTests(APITestCase):
    def setUp(self):
        self.url = reverse('register')

    def test_register_user_with_valid_data(self):
        data = {
            'name': 'Test User',
            'email': 'testuser@example.com',
            'password': 'strongpassword123'
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('message', response.data)
        self.assertEqual(response.data['message'], 'User registered successfully')

    def test_register_user_with_invalid_data(self):
        data = {
            'name': '',
            'email': 'invalidemail',
            'password': ''
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)
        self.assertIn('password', response.data)
        self.assertIn('name', response.data)


class UserLoginViewTests(APITestCase):
    def setUp(self):
        self.url = reverse('login')
        self.user_data = {
            'name': 'Test User',
            'email': 'testuser@example.com',
            'password': 'strongpassword123'
        }
        self.client.post(reverse('register'), self.user_data, format='json')

    def test_login_with_valid_credentials(self):
        data = {
            'email': self.user_data['email'],
            'password': self.user_data['password']
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access_token', response.data)
        self.assertIn('refresh_token', response.data)
        self.assertEqual(response.data['message'], 'Login successful')

    def test_login_with_invalid_credentials(self):
        data = {
            'email': 'testuser@example.com',
            'password': 'wrongpassword'
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('non_field_errors', response.data)
        self.assertEqual(response.data['non_field_errors'][0], 'Invalid credentials')



# ----------------------------------ADDRESS-------------------------------
class EcommerceTests(APITestCase):

    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(username='testuser', password='password123', email='testuser@example.com')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

        # Create an address for the user
        self.address = Address.objects.create(
            user=self.user,
            name="Test Address",
            phone="1234567890",
            line_1="123 Test Street",
            city="Test City",
            state="Test State",
            postal_code="12345",
            country="Test Country"
        )

    def test_update_address(self):
        data = {
            'name': 'Updated Address',
            'phone': '9876543210',
            'line_1': '456 Updated Street',
            'city': 'Updated City',
            'state': 'Updated State',
            'postal_code': '67890',
            'country': 'Updated Country'
        }
        response = self.client.put(f'http://localhost:8000/accounts/update-address/{self.address.id}/', data)
        self.assertEqual(response.status_code, 200)
        self.address.refresh_from_db()
        self.assertEqual(self.address.name, 'Updated Address')
        self.assertEqual(self.address.phone, '9876543210')

    def test_update_address_unauthenticated(self):
        # Test that an unauthenticated user cannot update an address
        self.client.force_authenticate(user=None)
        data = {'name': 'Updated Address'}
        response = self.client.put(f'http://localhost:8000/accounts/update-address/{self.address.id}/', data)
        self.assertEqual(response.status_code, 401)

    def test_update_address_not_owned_by_user(self):
        # Create another user with a unique email and try to update a different user's address
        another_user = get_user_model().objects.create_user(username='anotheruser', email='anotheruser@example.com', password='password456')
        self.client.force_authenticate(user=another_user)

        data = {'name': 'New Address by Another User'}
        response = self.client.put(f'http://localhost:8000/accounts/update-address/{self.address.id}/', data)
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.data['detail'], 'Address not found.')


# ---------------------------PRODUCT DETAILS----------------------------------------------
class ProductDetailViewTests(TestCase):

    def __init__(self, methodName: str = "runTest"):
        super().__init__(methodName)
        self.user = None

    def setUp(self):
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        self.product = Product.objects.create(
            name='Product 1',
            description='Description 1',
            price=10.00,
            image_url='http://example.com/product1.jpg'
        )

    def test_product_details(self):
        # Make a GET request to the product detail view with a valid product ID
        url = reverse('product_details', kwargs={'product_id': self.product.id})  # Correct URL name used
        response = self.client.get(url)

        # Check if the response is correct
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['name'], 'Product 1')
        self.assertEqual(response.json()['description'], 'Description 1')
        self.assertEqual(response.json()['price'], '10.00')
        self.assertEqual(response.json()['image_url'], 'http://example.com/product1.jpg')

    def test_product_not_found(self):
        # Make a GET request to the product detail view with an invalid product ID
        url = reverse('product_details', kwargs={'product_id': 99999})  # Assuming the ID does not exist
        response = self.client.get(url)

        # Check if the error response is correct
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()['error'], 'Product not found')





# ------------------------------------CART-------------------------------------

class AddToCartTestCase(APITestCase):
    def setUp(self):
        # Initialize user and product
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.client.force_authenticate(user=self.user)
        self.product = Product.objects.create(name="Test Product", price=10.00)

    def test_add_to_cart_successful(self):
        url = reverse("add_to_cart")
        data = {"product_id": self.product.id, "quantity": 1}

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)



        # Verify cart item is created with correct quantity
        cart_item = Cart.objects.get(user=self.user, product=self.product)


    def test_add_to_cart_without_quantity(self):
        url = reverse("add_to_cart")
        data = {"product_id": self.product.id}

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)



    def test_add_to_cart_without_product_id(self):
        url = reverse("add_to_cart")
        data = {"quantity": 2}

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["error"], "Product ID is required")

    def test_add_to_cart_with_invalid_product_id(self):
        url = reverse("add_to_cart")
        data = {"product_id": 999, "quantity": 1}  # Assuming 999 does not exist

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["error"], "Product not found")

    def test_increase_quantity_if_product_already_in_cart(self):
        Cart.objects.create(user=self.user, product=self.product, quantity=1)

        url = reverse("add_to_cart")
        data = {"product_id": self.product.id, "quantity": 2}

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        cart_item = Cart.objects.get(user=self.user, product=self.product)
        self.assertEqual(cart_item.quantity, 3)

