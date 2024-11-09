# accounts/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views
from .views import UserRegistrationView, UserLoginView, update_profile
from strawberry.django.views import GraphQLView
from .schema import schema

urlpatterns = [

    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),


    path('graphql/', csrf_exempt(GraphQLView.as_view(schema=schema)), name='graphql'),
    path('profile/update/', views.update_profile, name='update_profile'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
