from django_filters import rest_framework as filters
from .models import Especialidade

class EspecialidadeFilter(filters.FilterSet):
    search = filters.CharFilter(field_name="nome", lookup_expr='contains')

    class Meta:
        model = Especialidade
        fields = ['search']