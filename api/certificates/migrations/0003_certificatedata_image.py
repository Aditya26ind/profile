# Generated by Django 3.2.6 on 2021-08-10 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0002_auto_20210327_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='certificatedata',
            name='image',
            field=models.ImageField(default='', upload_to='image'),
        ),
    ]