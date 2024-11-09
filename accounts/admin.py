from django.contrib import admin
from django.utils.html import format_html
from .models import CustomUser, Product

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
