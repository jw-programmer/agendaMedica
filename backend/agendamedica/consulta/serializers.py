from rest_framework import serializers
from medico.serializers import MedicoSerializer
from .models import Consulta


class ConsultaSerializer(serializers.ModelSerializer):
    dia = serializers.ReadOnlyField()
    horario = serializers.ReadOnlyField()
    medico = MedicoSerializer()

    class Meta:
        model = Consulta
        fields = ("id", 'dia', 'horario', 'data_agendamento', 'medico')
        depth = 1
