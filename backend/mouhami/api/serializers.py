from rest_framework.serializers import ModelSerializer
from .models import Commentaire,Lawyer

class CommentaireSerializer(ModelSerializer):
    class Meta:
        model= Commentaire
        fields='__all__'  

class LawyerSerializer(ModelSerializer):
    class Meta:
        model= Lawyer
        fields=['firstName','secondName','phoneNumber','email','adresse','specialite',"langues",'desciption'] 