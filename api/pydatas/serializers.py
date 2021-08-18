from rest_framework import serializers
from .models import Pythondata
class Pythondata_Serializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Pythondata
        fields=["pro_name","description","image","link"]