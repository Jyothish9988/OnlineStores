# accounts/schema.py
import strawberry
from strawberry.file_uploads import Upload
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from .models import Profile
from accounts.models import CustomUser


@strawberry.type
class UserProfile:
    avatar: str
    username: str


@strawberry.type
class Query:
    # This will fetch the user's profile information (including avatar and username)
    @strawberry.field
    def get_user_profile(self, user_id: int) -> UserProfile:
        try:
            profile = Profile.objects.get(user__id=user_id)
            return UserProfile(avatar=profile.avatar.url if profile.avatar else None, username=profile.username)
        except Profile.DoesNotExist:
            raise Exception("User profile does not exist")


@strawberry.type
class Mutation:
    # This will update the user's profile (including avatar and username)
    @strawberry.mutation
    async def update_profile(self, user_id: int, avatar: Upload, username: str) -> UserProfile:
        try:
            profile = Profile.objects.get(user__id=user_id)

            # Handle avatar file saving
            if avatar:
                avatar_file = default_storage.save(avatar.name, ContentFile(avatar.file.read()))
                profile.avatar = avatar_file

            if username:
                profile.username = username

            profile.save()

            return UserProfile(avatar=profile.avatar.url if profile.avatar else None, username=profile.username)

        except Profile.DoesNotExist:
            raise Exception("User profile does not exist")


# Define the schema with both query and mutation
schema = strawberry.Schema(query=Query, mutation=Mutation)
