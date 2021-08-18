from django.db import models

# Create your models here.
class certificatedata(models.Model):
    name=models.CharField(max_length=50)
    link=models.CharField(max_length=20000)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    image=models.ImageField(upload_to="image",default='')
    def _str_(self):
        return self.name