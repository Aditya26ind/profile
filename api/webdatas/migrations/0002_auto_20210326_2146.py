# Generated by Django 3.1.7 on 2021-03-26 16:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('webdatas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='webdatas',
            name='description',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='webdatas',
            name='project',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]