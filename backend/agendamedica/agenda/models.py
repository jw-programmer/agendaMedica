from datetime import datetime
from django.utils import timezone
from django.db import models
from medico.models import Medico
# Create your models here.


class Agenda(models.Model):

    medico = models.ForeignKey(Medico, on_delete=models.PROTECT)
    horario = models.DateTimeField()

    def marcar_no_passado(self, agenda_nova):
        return agenda_nova.horario.day < datetime.today().day

    def marcar_repetido(self, agenda_nova):
        horarios = Agenda.objects.filter(
            medico=agenda_nova.medico).filter(horario=agenda_nova.horario)
        return horarios.exists()

    def save(self, *args, **kwargs):
        if not self.marcar_no_passado(self) and not self.marcar_repetido(self):
            super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.medico} reservado as {self.horario}"

    class Meta:

        verbose_name = 'Agenda'
        verbose_name_plural = 'Agendas'
