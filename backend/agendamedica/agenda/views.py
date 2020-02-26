from rest_framework import viewsets
from .filters import AgendaFilter
from .serializers import AgendaSerializer, Agenda


class AgendaViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Agenda.agendas_disponiveis()
    serializer_class = AgendaSerializer
    filterset_class = AgendaFilter
