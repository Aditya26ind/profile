from rest_framework import serializers
from .models import webdatas
class webSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=webdatas
        fields=["project","description","image","link"]