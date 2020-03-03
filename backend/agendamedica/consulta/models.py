from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from agenda.models import Agenda


class Consulta(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.PROTECT)
    data_agendamento = models.DateTimeField(auto_now_add=True)
    agenda = models.OneToOneField(Agenda, on_delete=models.PROTECT)

    @property
    def medico(self):
        return self.agenda.medico

    @property
    def dia(self):
        return self.agenda.horario.strftime("%d/%m/%Y")

    @property
    def horario(self):
        return self.agenda.horario.strftime("%H:%M")

    @classmethod
    def get_consultas_nao_realizadas(self):
        return Consulta.objects.filter(
            agenda__horario__gte=datetime.today()).order_by('agenda__horario')

    @classmethod
    def add_consulta(self, user, agenda_id):
        agenda = Agenda.objects.get(id=agenda_id)

        try:
            if not Agenda.marcar_no_passado(agenda) and Consulta.objects.filter(agenda=agenda).exists():
                nova_consulta = Consulta(usuario=user, agenda=agenda)
                nova_consulta.save()
                return nova_consulta
            else:
                return "Você quer reservar um horário já ocupado"
        except:
            return None

    @classmethod
    def delete_consulta(self, user, id):
        try:
            consulta = Consulta.objects.get(id=id)
        except Consulta.DoesNotExist:
            raise Consulta.DoesNotExist
        try:
            if not Agenda.marcar_no_passado(consulta.agenda) and consulta.usuario.id == user.id:
                consulta.delete()
                return "Consulta apagada"
            else:
                return "Você quer desmarcar uma consulta que já ocorreu ou não foi marcada por você"
        except:
            return None

    def __str__(self):
        return f"consulta para {self.usuario}"

    class Meta:
        verbose_name = 'Consulta'
        verbose_name_plural = 'Consultas'
