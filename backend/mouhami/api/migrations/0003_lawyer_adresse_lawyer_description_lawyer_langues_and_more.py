# Generated by Django 5.0 on 2024-01-03 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_lawyer'),
    ]

    operations = [
        migrations.AddField(
            model_name='lawyer',
            name='adresse',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='langues',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='lawyer',
            name='specialite',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
