from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
  owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
  title = models.CharField(max_length=100)
  description = models.CharField(max_length=255)
  completed = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now_add=False,blank=True,null=True)


  def __str__(self):
    return self.title
