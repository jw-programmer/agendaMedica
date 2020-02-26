from django_filters import rest_framework as filters
from especialidade.models import Especialidade
from .models import Medico

class MedicoFilter(filters.FilterSet):
    search = filters.CharFilter(field_name='nome', lookup_expr="contains")
    especialidade = filters.ModelChoiceFilter(queryset=Especialidade.objects.all())

    class Meta:
        model = Medico
        fields = ['search','especialidade']