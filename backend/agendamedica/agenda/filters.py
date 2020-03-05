from django_filters import rest_framework as filters
from medico.models import Medico
from medico.models import Especialidade
from .models import Agenda


class AgendaFilter(filters.FilterSet):
    medico = filters.ModelMultipleChoiceFilter(queryset=Medico.objects.all())
    especialidade = filters.ModelMultipleChoiceFilter(queryset=Especialidade.objects.all(),
                                                      field_name="medico__especialidade",)
    data_inicio = filters.DateFilter(field_name='horario', lookup_expr='gte')
    data_final = filters.DateFilter(field_name='horario', lookup_expr='lte')

    class Meta:
        model = Agenda
        fields = ['medico', 'especialidade', 'data_inicio', 'data_final']
