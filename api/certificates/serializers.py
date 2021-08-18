from rest_framework import serializers
from .models import certificatedata
class certificate_serializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=certificatedata
        fields=["name","link","image"]
        