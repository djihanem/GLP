# Generated by Django 5.0 on 2024-01-04 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_lawyer_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lawyer',
            name='password',
            field=models.CharField(max_length=100),
        ),
    ]