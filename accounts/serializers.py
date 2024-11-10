from requests import Response
from rest_framework import serializers, status
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from accounts.models import Profile, Product, Cart

User = get_user_model()


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'name']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['email'].split('@')[0],
            name=validated_data['name'],
            password=validated_data['password']
        )
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        user = User.objects.filter(email=email).first()

        if user and user.check_password(password):
            return data

        raise serializers.ValidationError("Invalid credentials")


# Serializer to handle the profile update
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['avatar', 'bio']


@api_view(['PUT'])
def update_profile(request):
    try:
        user = request.user
        profile = Profile.objects.get(user=user)

        serializer = ProfileSerializer(profile, data=request.data,
                                       partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Profile.DoesNotExist:
        return Response({"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND)



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'stock', 'image_url']  # Include relevant fields

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer()  # Nested serializer for product details

    class Meta:
        model = Cart
        fields = ['user', 'product', 'quantity', 'added_at']  # Now includes full product details

