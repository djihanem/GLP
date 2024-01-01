from django.urls import path
from . import views

urlpatterns=[
    path('',views.getRoutes,name="routes"),
    path('commentaires/',views.getCommentaires,name='commentaires'),
    path('commentaires/<str:pk>/',views.getCommentaire,name='commentaire'),
    
]