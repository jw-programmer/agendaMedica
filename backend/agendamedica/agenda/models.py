from datetime import datetime
from django.db import models
from medico.models import Medico
# Create your models here.


class Agenda(models.Model):

    medico = models.ForeignKey(Medico, on_delete=models.PROTECT)
    horario = models.DateTimeField()

    @property
    def especialidade(self):
        return self.medico.especialidade

    @classmethod
    def marcar_no_passado(self, agenda_nova):
        return agenda_nova.horario.day < datetime.today().day

    def marcar_repetido(self, agenda_nova):
        horarios = Agenda.objects.filter(
            medico=agenda_nova.medico).filter(horario=agenda_nova.horario)
        return horarios.exists()

    @classmethod
    def agendas_disponiveis(self):
        agendas_livres = Agenda.objects.filter(
            horario__gte=datetime.today()).filter(consulta__isnull=True)
        return agendas_livres

    def save(self, *args, **kwargs):
        if not self.marcar_no_passado(self) and not self.marcar_repetido(self):
            super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.medico} reservado as {self.horario}"

    class Meta:

        verbose_name = 'Agenda'
        verbose_name_plural = 'Agendas'
