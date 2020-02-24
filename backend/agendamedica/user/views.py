from rest_framework import mixins
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, User

class UserViewset(mixins.CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes=[AllowAny]
