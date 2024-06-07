from django.db import models

class Base(models.Model):
    criacao = models.DateField(auto_now_add=True)
    atualizacao = models.DateField(auto_now=True)

    class Meta:
        abstract = True

class Task(Base):
    titulo = models.CharField(max_length=255)
    tag = models.CharField(max_length=50, blank=True)
    descricao = models.TextField(blank=True, default='')
    data = models.DateTimeField(blank=True, null=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Tarefa'
        verbose_name_plural = 'Tarefas'

    def __str__(self):
        return self.titulo
