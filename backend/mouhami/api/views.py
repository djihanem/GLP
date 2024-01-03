from django.http import JsonResponse
# from django.http import JsonResponse
from rest_framework.response import Response
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.decorators import api_view
from .models import Commentaire, Lawyer
from django.contrib.auth import authenticate, login
from .serializers import CommentaireSerializer
from .forms import LawyerSignUpForm
from django.contrib.auth import login
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


User = get_user_model()

@api_view(['POST'])
@permission_classes([AllowAny])
def lawyer_signup(request):
    try:
        if request.method == 'POST':
            form = LawyerSignUpForm(request.POST)
            print(request.POST)
            if form.is_valid():
                user = form.save()
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                return JsonResponse({'message': 'Signup successful', 'access_token': access_token})
            else:
                print(form.errors)
                return JsonResponse({'message': 'Invalid form data'}, status=400)
        else:
            return JsonResponse({'message': 'Invalid request method'}, status=400)
    except Exception as e:
        print(f"Error in lawyer_signup view: {str(e)}")
        return JsonResponse({'message': 'Internal Server Error'}, status=500)


@csrf_exempt
@api_view(['POST'])
def lawyer_login(request):
    try:
        if request.method == 'POST':
            # Get email and password from the request
            email = request.data.get('email')
            password = request.data.get('password')

            # Check if email exists in the database
            user = Lawyer.objects.filter(email=email).first()

            if user is not None and user.check_password(password):
                # Authenticate the user and generate JWT tokens
                authenticate_user = authenticate(request, username=user.username, password=password)
                login(request, authenticate_user)

                refresh = RefreshToken.for_user(authenticate_user)
                access_token = str(refresh.access_token)

                return JsonResponse({'message': 'Login successful', 'access_token': access_token})
            else:
                return JsonResponse({'message': 'Invalid credentials'}, status=401)
        else:
            return JsonResponse({'message': 'Invalid request method'}, status=400)
    except Exception as e:
        print(f"Error in custom_login view: {str(e)}")
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
