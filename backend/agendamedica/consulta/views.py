from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import ConsultaSerializer, Consulta


class ConsultaViewset(viewsets.ModelViewSet):
    queryset = Consulta.get_consultas_nao_realizadas()
    serializer_class = ConsultaSerializer

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(usuario=self.request.user)
        return self.queryset

    def create(self, request):
        consulta = Consulta.add_consulta(request.user, request.data['agenda'])
        if not consulta:
            return Response(data="Dados inválidos", status=status.HTTP_400_BAD_REQUEST)
        elif type(consulta) is str:
            return Response(data=consulta, status=status.HTTP_400_BAD_REQUEST)
        else:
            consulta_serializada = self.get_serializer(consulta)
            return Response(data=consulta_serializada.data, status=status.HTTP_201_CREATED)
