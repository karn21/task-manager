from django.contrib import admin
from .models import Task



class TaskAdmin(admin.ModelAdmin):
  list_display = ['title','description','created_at','completed']

admin.site.register(Task,TaskAdmin)
