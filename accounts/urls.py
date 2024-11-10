# accounts/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views
from .views import UserRegistrationView, UserLoginView, ProductListView, view_address, update_address, remove_from_cart
from strawberry.django.views import GraphQLView
from onlineStore.schema import schema

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('graphql/', csrf_exempt(GraphQLView.as_view(schema=schema)), name='graphql'),
    path('profile/update/', views.update_profile, name='update_profile'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:product_id>/', views.product_details, name='product_details'),
    path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    path('view-cart/', views.view_cart, name='view_cart'),
    path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    path('update-cart/<int:cart_item_id>/', views.update_cart, name='update_cart'),
    path('remove-from-cart/<int:cartid>/', remove_from_cart, name='remove_from_cart'),
    path('view-address/', view_address, name='view-address'),



    path('add-address/', views.add_address, name='add_address'),
    path('update-address/<int:address_id>/', views.update_address, name='update_address'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
