from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'descricao', 'tag', 'data', 'criacao', 'atualizacao', 'ativo']