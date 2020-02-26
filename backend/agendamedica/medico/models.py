from django.db import models
from especialidade.models import Especialidade
# Create your models here.


class Medico(models.Model):

    nome = models.CharField(max_length=50)
    crm = models.CharField(max_length=13)
    email = models.EmailField(blank=True, null=True)
    telefone = models.CharField(blank=True, null=True, max_length=9)
    especialidade = models.ForeignKey(Especialidade, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.nome}({self.crm})"

    class Meta:
        verbose_name = 'Medico'
        verbose_name_plural = 'Medicos'
