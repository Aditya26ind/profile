from rest_framework import viewsets
from .models import webdatas
from .serializers import webSerializers
# Create your views here.
class webViewsets(viewsets.ModelViewSet):
    queryset=webdatas.objects.all().order_by("project")
    serializer_class=webSerializers
