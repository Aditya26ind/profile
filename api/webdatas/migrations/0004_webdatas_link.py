# Generated by Django 3.2.6 on 2021-08-10 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webdatas', '0003_webdatas_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='webdatas',
            name='link',
            field=models.CharField(default='', max_length=20000),
        ),
    ]
