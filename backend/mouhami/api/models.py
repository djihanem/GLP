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
    image = models.ImageField(upload_to = 'images/', null=True, blank=True)

class Client(models.Model):
    clientName=models.CharField(max_length=100)
    clientEmail=models.CharField(max_length=100)
    clientPassword= models.CharField(max_length=100)

class Commentaire(models.Model):
    name = models.CharField(max_length=30)
    body=models.TextField()
    date = models.DateTimeField(auto_now=True)

class User(models.Model):
    emailUser = models.EmailField(unique=True)
    nameUser = models.CharField(max_length=100)

class RendezVous(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    avocat = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    dateRDV = models.DateField()
    heureRDV = models.TimeField()

class Comment(models.Model):
    clientComment = models.ForeignKey(Client, on_delete=models.CASCADE)
    lawyerComment = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    bodyComment = models.TextField()

