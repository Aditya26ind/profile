from rest_framework.authtoken import views
from django.urls import path,include
from .views import home
urlpatterns=[
    path("",home,name='api.home'),
    path("pythondata/", include("api.pydatas.urls")),
    path("certificate/",include("api.certificates.urls")),
    path("webdatas/",include("api.webdatas.urls")),
]