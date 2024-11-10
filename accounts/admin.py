from django.contrib import admin
from django.utils.html import format_html
from .models import CustomUser, Product, Cart, Order, Address


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_staff', 'is_superuser']
    search_fields = ['username', 'email']
    list_filter = ['is_staff', 'is_superuser']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'stock', 'image_link']
    search_fields = ['name', 'description']
    list_filter = ['price', 'stock']

    def image_link(self, obj):
        if obj.image_url:
            return format_html('<a href="{0}" target="_blank"><img src="{0}" width="100" height="100" /></a>',
                               obj.image_url)
        return "No image"

    image_link.short_description = 'Product Image'

    def get_urls(self):
        from django.urls import path
        urls = super().get_urls()
        custom_urls = []
        return custom_urls + urls


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'quantity', 'added_at']
    search_fields = ['user__username', 'product__name']
    list_filter = ['user', 'product']
    ordering = ['-added_at']
    readonly_fields = ['added_at']  # Make the added_at field readonly

    # Optional: Admin actions to update the cart (e.g., clearing cart)
    actions = ['clear_cart']

    def clear_cart(self, request, queryset):
        if queryset.exists():
            queryset.delete()
            self.message_user(request, "Selected cart items have been cleared.", messages.SUCCESS)
        else:
            self.message_user(request, "No items selected to clear.", messages.WARNING)

    clear_cart.short_description = 'Clear selected cart items'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'quantity', 'added_at', 'status']
    search_fields = ['user__username', 'product__name']
    list_filter = ['user', 'product']
    ordering = ['-added_at']
    date_hierarchy = 'added_at'
    list_editable = ['status']




@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['user', 'city', 'state', 'postal_code']  # use postal_code instead of zip_code
    search_fields = ['user__username', 'city', 'state', 'postal_code']  # make sure postal_code is included
    list_filter = ['user', 'city', 'state', 'postal_code']  # use postal_code instead of zip_code
    ordering = ['-city', '-state', '-postal_code']  # make sure postal_code is included

    def city(self, obj):
        return obj.city