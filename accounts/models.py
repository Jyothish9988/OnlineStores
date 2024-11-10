from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model
from django.db import models
from django.conf import settings


# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'name']


User = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    username = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.user.email}'s profile"


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image_url = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    cartid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} (x{self.quantity})"

    class Meta:
        unique_together = ('user', 'product')


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} (x{self.quantity})"


class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='addresses')
    name = models.CharField(max_length=255, default='Not Provided')
    phone = models.CharField(max_length=255, default='Not Provided')
    line_1 = models.CharField(max_length=255, default='Not Provided')
    line_2 = models.CharField(max_length=255, blank=True, null=True, default='')
    city = models.CharField(max_length=100, default='Unknown City')
    state = models.CharField(max_length=100, default='Unknown State')
    postal_code = models.CharField(max_length=20, default='000000')
    country = models.CharField(max_length=100, default='Unknown Country')

    def __str__(self):
        return f'{self.user} - {self.city}, {self.state}'
