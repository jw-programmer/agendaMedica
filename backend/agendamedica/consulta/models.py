from django.db import models
from django.contrib.auth.models import User
from agenda.models import Agenda


class Consulta(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.PROTECT)
    data_agendamento = models.DateTimeField(auto_now_add=True)
    agenda = models.ForeignKey(Agenda, on_delete=models.PROTECT)

    def __str__(self):
        return f"consulta para {self.usuario}"

    class Meta:
        verbose_name = 'Consulta'
        verbose_name_plural = 'Consultas'
