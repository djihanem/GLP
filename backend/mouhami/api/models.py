from django.db import models

# Create your models here.
class Lawyer(models.Model):
    firstName = models.CharField(max_length=100)
    secondName = models.CharField(max_length=100)
    phoneNumber = models.IntegerField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)

class Commentaire(models.Model):
    name = models.CharField(max_length=30)
    body=models.TextField()
    date = models.DateTimeField(auto_now=True)
