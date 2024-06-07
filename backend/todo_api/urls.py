from django.urls import path
from .views import TaskAPIView, TaskDetailAPIView


urlpatterns = [
    path('tarefas/', TaskAPIView.as_view(), name='task-list'),
    path('tarefas/<int:pk>/', TaskDetailAPIView.as_view(), name='task-detail'),
]
