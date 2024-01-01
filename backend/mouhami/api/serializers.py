from rest_framework.serializers import ModelSerializer
from .models import Commentaire

class CommentaireSerializer(ModelSerializer):
    class Meta:
        model= Commentaire
        fields='__all__'  