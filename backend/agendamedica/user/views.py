from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, User


class UserViewset(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    #Usuário só recupera ele mesmo. Não encontrei uma forma de colocar essa permissão de forma explicita, então voi fazer na mão.
    def retrieve(self, request, pk=None):
        if request.user.id != int(pk):
            return Response(data="PROIBIDO!!!", status=status.HTTP_403_FORBIDDEN)
        else:
            serial_user = self.get_serializer(request.user)
            return Response(data=serial_user.data, status=status.HTTP_200_OK)


    def create(self, request):
        new_user = User.objects.create_user(
            username=request.data['username'], password=request.data['password'])
        if not new_user:
            return Response(data="Dados inválidos", status=status.HTTP_400_BAD_REQUEST)
        else:
            user_serializado = self.get_serializer(new_user)
            return Response(data=user_serializado.data, status=status.HTTP_201_CREATED)
