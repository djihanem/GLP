from django.http import JsonResponse
# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Commentaire
from .serializers import CommentaireSerializer
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .forms import LawyerSignUpForm, LawyerLoginForm
from django.contrib.auth import authenticate, login

from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from .models import Lawyer


User = get_user_model()

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def lawyer_signup(request):
#     try:
#         if request.method == 'POST':
#             form = LawyerSignUpForm(request.POST)
#             if form.is_valid():
#                 user = form.save()
#                 refresh = RefreshToken.for_user(user)
#                 access_token = str(refresh.access_token)
#                 return JsonResponse({'message': 'Signup successful', 'access_token': access_token})
#             else:
#                 return JsonResponse({'message': 'Invalid form data'}, status=400)
#         else:
#             return JsonResponse({'message': 'Invalid request method'}, status=400)
#     except Exception as e:
#         print(f"Error in lawyer_signup view: {str(e)}")
#         return JsonResponse({'message': 'Internal Server Error'}, status=500)
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
@permission_classes([AllowAny])
def lawyer_signup(request):
    try:
        if request.method == 'POST':
            form = LawyerSignUpForm(request.POST)
            if form.is_valid():
                user = form.save()
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                logger.info(f"New user signed up: {user.email}")  # Log réussi
                return JsonResponse({'message': 'Signup successful', 'access_token': access_token})
            else:
                logger.warning("Invalid form data received")  # Log de données de formulaire invalides
                return JsonResponse({'message': 'Invalid form data'}, status=400)
        else:
            logger.warning("Invalid request method")  # Log pour méthode de requête invalide
            return JsonResponse({'message': 'Invalid request method'}, status=400)
    except Exception as e:
        logger.exception(f"Error in lawyer_signup view: {str(e)}")  # Log pour toute exception
        return JsonResponse({'message': 'Internal Server Error'}, status=500)

@api_view(['POST'])
@permission_classes([AllowAny])
def lawyer_login(request):
    try:
        if request.method == 'POST':
            form = LawyerLoginForm(request.POST)
            print(request.POST)
            if form.is_valid():
                email = form.cleaned_data.get('email') 
                password = form.cleaned_data.get('password')
                
                # Check if a user with the provided email exists
                user = Lawyer.objects.filter(email=email).first()
                
                if user is not None and user.check_password(password):
                    # Authenticate the user
                    authenticated_user = authenticate(request, email=email, password=password)

                    if authenticated_user is not None:
                        # Your token generation logic here
                        return JsonResponse({'message': 'Login successful'})
                    else:
                        return JsonResponse({'message': 'Authentication failed'}, status=401)
                else:
                    return JsonResponse({'message': 'Invalid credentials'}, status=401)
            else:
                print(form.errors)
                return JsonResponse({'message': 'Invalid form data'}, status=400)
        else:
            return JsonResponse({'message': 'Invalid request method'}, status=400)
    except Exception as e:
        print(f"Error in lawyer_login view: {str(e)}")
        return JsonResponse({'message': 'Internal Server Error'}, status=500)

@api_view(['GET']) #method allows to this view
def getRoutes(request):
     routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    #  return JsonResponse(routes, safe=False)
     return Response(routes)

@api_view(['GET'])
def getCommentaires(request):
    commentaires=Commentaire.objects.all() #get all comments from the database 
    serializer = CommentaireSerializer(commentaires, many=True) #serialize them
    return Response(serializer.data)

@api_view(['GET'])
def getCommentaire(request,pk):
    commentaire=Commentaire.objects.get(id=pk) #get the specific comment with the pk 
    serializer = CommentaireSerializer(commentaire, many=False) #serialize them
    return Response(serializer.data)
