from rest_framework import viewsets
from .serializers import MedicoSerializer, Medico
from .filters import MedicoFilter


class MedicoViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer
    filterset_class = MedicoFilter