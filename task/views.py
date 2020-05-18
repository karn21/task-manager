from django.shortcuts import render
from rest_framework import viewsets,permissions
from .serializers import TaskSerializer
from .models import Task


class TaskView(viewsets.ModelViewSet):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = TaskSerializer

  def get_queryset(self):
    return self.request.user.tasks.all().order_by("created_at")

  def perform_create(self,serializer):
    serializer.save(owner=self.request.user)


