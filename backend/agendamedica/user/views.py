from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, User


class UserViewset(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        new_user = User.objects.create_user(
            username=request.data['username'], password=request.data['password'])
        if not new_user:
            return Response(data="Dados inválidos", status=status.HTTP_400_BAD_REQUEST)
        else:
            user_serializado = self.get_serializer(new_user)
            return Response(data=user_serializado.data, status=status.HTTP_201_CREATED)
