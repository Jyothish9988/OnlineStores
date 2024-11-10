# accounts/views.py
from chowkidar.authentication import authenticate
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from .models import Profile, Product, Cart, Address, Order
from .serializers import UserRegistrationSerializer, UserLoginSerializer, ProfileSerializer, ProductSerializer,CartSerializer, AddressSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')

            user = authenticate(username=email, password=password)
            if user:
                # Generate JWT token
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh),
                    'username': user.username,
                    'message': 'Login successful'
                }, status=status.HTTP_200_OK)

            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    try:
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Profile.DoesNotExist:
        return Response({"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND)


class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


def product_details(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        data = {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "image_url": product.image_url,  # Correct field name here
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


@api_view(['POST'])
@permission_classes([IsAuthenticated])  # Ensure the user is authenticated
def add_to_cart(request):
    user = request.user  # Get the authenticated user
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity", 1)

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    cart_item, created = Cart.objects.get_or_create(user=user, product=product)
    cart_item.quantity += quantity
    cart_item.save()

    return Response({"message": "Product added to cart successfully!"}, status=status.HTTP_200_OK)


@api_view(['GET'])
def view_cart(request):
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."},
                        status=status.HTTP_401_UNAUTHORIZED)

    # Get all cart items for the logged-in user
    cart_items = Cart.objects.filter(user=request.user)
    serializer = CartSerializer(cart_items, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def update_cart(request, cart_item_id):
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."},
                        status=status.HTTP_401_UNAUTHORIZED)

    try:
        cart_item = Cart.objects.get(id=cart_item_id, user=request.user)
    except Cart.DoesNotExist:
        return Response({"detail": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)

    quantity = request.data.get('quantity')

    if quantity <= 0:
        return Response({"detail": "Quantity must be greater than zero."}, status=status.HTTP_400_BAD_REQUEST)

    cart_item.quantity = quantity
    cart_item.save()

    return Response({"detail": "Cart item updated successfully."}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])  # Ensure the user is authenticated
def remove_from_cart(request, cartid):
    try:

        cart_item = Cart.objects.get(cartid=cartid, user=request.user)
        cart_item.delete()  # Delete the cart item
        return JsonResponse({'detail': 'Item removed successfully'})
    except Cart.DoesNotExist:
        return JsonResponse({'detail': 'Cart item not found'}, status=404)


@api_view(['GET'])
def view_address(request):
    # Check if the user is authenticated
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."},
                        status=status.HTTP_401_UNAUTHORIZED)

    try:
        # Get the user's address (assuming a one-to-one relationship with the user)
        address = Address.objects.get(user=request.user)
    except Address.DoesNotExist:
        return Response({"detail": "Address not found."}, status=status.HTTP_404_NOT_FOUND)

    # Serialize the address
    serializer = AddressSerializer(address)
    return Response(serializer.data)


@api_view(['POST'])
def add_address(request):
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."},
                        status=status.HTTP_401_UNAUTHORIZED)

    serializer = AddressSerializer(data=request.data)
    if serializer.is_valid():
        # Set the user to the current authenticated user before saving
        serializer.save(user=request.user)
        return Response({"detail": "Address added successfully."}, status=status.HTTP_201_CREATED)

    return Response({"error": "Invalid data", "details": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_address(request, address_id):
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."},
                        status=status.HTTP_401_UNAUTHORIZED)

    try:
        address = Address.objects.get(id=address_id, user=request.user)
    except Address.DoesNotExist:
        return Response({"detail": "Address not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = AddressSerializer(address, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"detail": "Address updated successfully."}, status=status.HTTP_200_OK)

    return Response({"error": "Invalid data", "details": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def order_now(request):
    user = request.user
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity", 1)

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    order_item, created = Order.objects.get_or_create(user=user, product=product)
    order_item.quantity += quantity
    order_item.save()

    # Sending email after successful order
    subject = "Order Confirmation"
    message = f"Hello {user.username},\n\nYour order for {product.name} (Quantity: {quantity}) has been successfully placed.\n\nThank you for shopping with us!"
    recipient_list = [user.email]

    try:
        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)
    except Exception as e:
        return Response({"error": "Failed to send email notification", "details": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"message": "Ordered successfully! A confirmation email has been sent to your email."}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_orders(request):
    user = request.user
    orders = Order.objects.filter(user=user).order_by('-added_at')

    if not orders:
        return Response({'message': 'No orders found for this user.'}, status=status.HTTP_404_NOT_FOUND)

    order_data = []
    for order in orders:
        product = order.product
        try:
            address = Address.objects.get(user=user)
            user_address = f"{address.line_1}, {address.line_2}, {address.city}, {address.state}, {address.postal_code}, {address.country}"
        except Address.DoesNotExist:
            user_address = "No Address Available"

        order_data.append({
            'orderid': order.orderid,
            'product_name': product.name,
            'product_description': product.description,
            'quantity': order.quantity,
            'price': product.price,
            'added_at': order.added_at,
            'status': "Completed" if order.status else "Pending",
            'user_address': user_address,
            'image_url': product.image_url,
        })

    return Response(order_data, status=status.HTTP_200_OK)
