from django.db import models

# Create your models here.
class Lawyer(models.Model):
    firstName = models.CharField(max_length=100)
    secondName = models.CharField(max_length=100)
    phoneNumber = models.IntegerField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    specialite = models.CharField(max_length=100, null=True)
    langues = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)
    adresse = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to='./lawyer_images/', null=True, blank=True)

class Commentaire(models.Model):
    name = models.CharField(max_length=30)
    body=models.TextField()
    date = models.DateTimeField(auto_now=True)
