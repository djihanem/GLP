from django.urls import path
from . import views
from .views import lawyer_signup, lawyer_login

urlpatterns=[
    path('',views.getRoutes,name="routes"),
    path('commentaires/',views.getCommentaires,name='commentaires'),
    path('commentaires/<str:pk>/',views.getCommentaire,name='commentaire'),
    path('signup/', lawyer_signup, name='lawyer_signup'),
    path('login/', lawyer_login, name='lawyer_login'),
]
