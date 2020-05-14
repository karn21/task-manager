from django.db import models



class Task(models.Model):
  title = models.CharField(max_length=100)
  description = models.CharField(max_length=255)
  completed = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now_add=False,blank=True,null=True)


  def __str__(self):
    return self.title
