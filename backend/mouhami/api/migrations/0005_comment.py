# Generated by Django 5.0.1 on 2024-01-26 20:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rendezvous'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bodyComment', models.TextField()),
                ('clientComment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.client')),
                ('lawyerComment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.lawyer')),
            ],
        ),
    ]
