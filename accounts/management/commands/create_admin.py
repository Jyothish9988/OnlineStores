from django.core.management.base import BaseCommand
from accounts.models import CustomUser


class Command(BaseCommand):
    help = 'Creates an admin user via the command line'

    def handle(self, *args, **kwargs):
        name = input('Enter admin name: ')
        email = input('Enter admin email: ')
        password = input('Enter admin password: ')
        if not CustomUser.objects.filter(username=name).exists():
            user = CustomUser.objects.create_superuser(username=name, email=email, password=password)
            self.stdout.write(self.style.SUCCESS(f'Admin user {name} created successfully'))
        else:
            self.stdout.write(self.style.WARNING(f'User {name} already exists'))
