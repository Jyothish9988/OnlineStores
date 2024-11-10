# accounts/views.py
from chowkidar.authentication import authenticate
from chowkidar.decorators import login_required
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.contrib.auth.models import AnonymousUser
from .models import Profile, Product, Cart
from .serializers import UserRegistrationSerializer, UserLoginSerializer, ProfileSerializer, ProductSerializer, \
    CartSerializer
from rest_framework_simplejwt.tokens import RefreshToken
import logging


# Create your views here.

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework_simplejwt.tokens import RefreshToken


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
    if isinstance(request.user, AnonymousUser):
        return Response({"error": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)

    try:
        profile = Profile.objects.get(user=request.user)  # Get profile for the authenticated user

        # Update the profile with new data
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()  # Save the profile
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
@permission_classes([IsAuthenticated])
def remove_from_cart(request, cart_item_id):
    cart_item = get_object_or_404(Cart, id=cart_item_id)
    cart_item.delete()
    return JsonResponse({'detail': 'Item removed successfully'})