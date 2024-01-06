from django.urls import path
from . import views
from .views import lawyer_signup, lawyer_login, google_login

urlpatterns=[
    path('',views.getRoutes,name="routes"),

    path('commentaires/',views.getCommentaires,name='commentaires'),
    path('commentaires/<str:pk>/',views.getCommentaire,name='commentaire'),

    path('signup/', lawyer_signup, name='lawyer_signup'),
    path('login/', lawyer_login, name='lawyer_login'),
    path('auth/google/', google_login, name='google_login'),

    path('Lawyers/',views.getLawyers,name='Lawyers'),

    path('Lawyers/<str:pk>/update/',views.updateLawyer,name='update-Lawyer'),

    path('Lawyers/<str:pk>/',views.getLawyer,name='Lawyer'),

    path('search-lawyers/', views.searchLawyers, name='search-lawyers'),
]
