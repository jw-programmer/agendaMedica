from datetime import datetime
from rest_framework import viewsets
from .serializers import ConsultaSerializer, Consulta


class ConsultaViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Consulta.get_consultas_nao_realizadas()
    serializer_class = ConsultaSerializer

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(usuario=self.request.user)
        return self.queryset
