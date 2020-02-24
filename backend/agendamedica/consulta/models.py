from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from agenda.models import Agenda


class Consulta(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.PROTECT)
    data_agendamento = models.DateTimeField(auto_now_add=True)
    agenda = models.ForeignKey(Agenda, on_delete=models.PROTECT)

    @property
    def medico(self):
        return self.agenda.medico

    @property
    def dia(self):
        return self.agenda.horario.strftime("%m-%d-%Y")

    @property
    def horario(self):
        return self.agenda.horario.strftime("%H:%M")

    @classmethod
    def get_consultas_nao_realizadas(self):
        return Consulta.objects.filter(
            agenda__horario__gte=datetime.today()).order_by('agenda__horario')

    def __str__(self):
        return f"consulta para {self.usuario}"

    class Meta:
        verbose_name = 'Consulta'
        verbose_name_plural = 'Consultas'
