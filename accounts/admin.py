from django.contrib import admin
from django.utils.html import format_html
from .models import CustomUser, Product, Cart, Order, Address
from django.contrib import admin
from .models import Order, Address
from django.http import HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

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
    list_display = ['cartid','user', 'product', 'quantity', 'added_at']
    search_fields = ['user__username', 'product__name']
    list_filter = ['user', 'product']
    ordering = ['-added_at']
    readonly_fields = ['added_at']
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
    list_display = ['user', 'product', 'quantity', 'added_at', 'status', 'user_address']
    search_fields = ['user__username', 'product__name']
    list_filter = ['user', 'product']
    ordering = ['-added_at']
    date_hierarchy = 'added_at'
    list_editable = ['status']
    actions = ['export_to_pdf']

    def user_address(self, obj):
        try:
            address = Address.objects.get(user=obj.user)
            return f"{address.city}, {address.state}, {address.postal_code}"
        except Address.DoesNotExist:
            return "No Address"
    user_address.short_description = 'User Address'

    # Define the PDF export action
    def export_to_pdf(self, request, queryset):
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename=orders.pdf'

        # Create PDF using reportlab
        p = canvas.Canvas(response, pagesize=letter)
        p.drawString(100, 750, "Order Details")

        y_position = 730
        for order in queryset:
            user_address = self.user_address(order)  # Get the address
            p.drawString(100, y_position, f"User: {order.user.username}, Product: {order.product.name}, Address: {user_address}")
            y_position -= 20  # Move down for next order entry

        p.showPage()
        p.save()
        return response

    export_to_pdf.short_description = "Export to PDF"




@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['user', 'city', 'state', 'postal_code']
    search_fields = ['user__username', 'city', 'state', 'postal_code']
    list_filter = ['user', 'city', 'state', 'postal_code']
    ordering = ['-city', '-state', '-postal_code']

    def city(self, obj):
        return obj.city