from django.db import models
# Create your models here.
class webdatas(models.Model):
    project=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    link=models.CharField(max_length=20000,default="")
    image=models.ImageField(upload_to="image",default='')
    created_at=models.DateTimeField(auto_now_add=True)
    end_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.project
