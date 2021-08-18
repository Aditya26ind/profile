
from rest_framework import viewsets
from .models import certificatedata
from .serializers import certificate_serializers

# Create your views here.
class Certificates_viewsets(viewsets.ModelViewSet):
    queryset=certificatedata.objects.all().order_by("name")
    serializer_class=certificate_serializers

