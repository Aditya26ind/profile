from django.urls import path ,include
from rest_framework import routers
from .models import webdatas
from .serializers import webSerializers
from . import views
router=routers.DefaultRouter()
router.register(r'',views.webViewsets)
urlpatterns=[
    path("",include(router.urls))
]