import strawberry
from strawberry.file_uploads import Upload
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from accounts.models import Profile



# Assuming Query and Mutation are defined in the same file


@strawberry.type
class UserProfile:
    avatar: str
    username: str


@strawberry.type
class Query:
    @strawberry.field
    def get_user_profile(self, user_id: int) -> UserProfile:
        try:
            profile = Profile.objects.get(user__id=user_id)
            return UserProfile(avatar=profile.avatar.url if profile.avatar else None, username=profile.username)
        except Profile.DoesNotExist:
            raise Exception("User profile does not exist")


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def update_profile(self, user_id: int, avatar: Upload = None, username: str = None) -> UserProfile:
        try:
            profile = Profile.objects.get(user__id=user_id)
            if avatar:
                avatar_file = default_storage.save(avatar.name, ContentFile(avatar.file.read()))
                profile.avatar = avatar_file
            if username:
                profile.username = username
            profile.save()
            return UserProfile(avatar=profile.avatar.url if profile.avatar else None, username=profile.username)
        except Profile.DoesNotExist:
            raise Exception("User profile does not exist")


schema = strawberry.Schema(query=Query, mutation=Mutation)
