from rest_framework.serializers import ModelSerializer
from .models import Commentaire,Lawyer, Client, Comment, RendezVous

class CommentaireSerializer(ModelSerializer):
    class Meta:
        model= Commentaire
        fields='__all__'  

class LawyerSerializer(ModelSerializer):
    class Meta:
        model= Lawyer
        fields='__all__' 
        # fields=['firstName','secondName','phoneNumber','email','adresse','specialite',"langues",'desciption'] 

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['clientComment', 'lawyerComment', 'bodyComment']

class ClientSerializer(ModelSerializer):
    class Meta:
        model= Commentaire
        fields='__all__'  

class RendezVousSerializer(ModelSerializer):
    class Meta:
        model = RendezVous
        fields = ['client', 'avocat', 'dateRDV', 'heureRDV']