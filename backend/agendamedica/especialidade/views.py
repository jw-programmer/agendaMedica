from rest_framework import viewsets
from .models import Especialidade
from .serializers import EspecialidadeSerializer
from .filters import EspecialidadeFilter


class EspecialidadeViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Especialidade.objects.all()
    serializer_class = EspecialidadeSerializer
    filterset_class = EspecialidadeFilter
