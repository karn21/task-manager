from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from task import views
from .views import index

router = routers.DefaultRouter()
router.register('tasks',views.TaskView,'task')

urlpatterns = [
	path('',index,name="index"),
    path('api/',include(router.urls)),
    path('api/auth/', include('accounts.api.urls')),
    path('admin/', admin.site.urls),
    path('<path:resource>',index,name="index"),
]