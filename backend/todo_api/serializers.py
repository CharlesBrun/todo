from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'id',
            'titulo',
            'descricao',
            'tag',
            'data',
            'ativo',
            'criacao',
        )