from rest_framework import viewsets
from .serializers import Pythondata_Serializers
from .models import Pythondata

class Pydata_Viewset(viewsets.ModelViewSet):
    queryset= Pythondata.objects.all().order_by("pro_name")
    serializer_class=Pythondata_Serializers
# Create your views here.

