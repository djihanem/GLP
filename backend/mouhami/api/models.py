from django.db import models

# Create your models here.

class Commentaire(models.Model):
    name = models.CharField(max_length=30)
    body=models.TextField()
    date = models.DateTimeField(auto_now=True)
