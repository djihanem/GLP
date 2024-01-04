from django import forms
from .models import Lawyer
from django.contrib.auth.hashers import make_password


class LawyerSignUpForm(forms.ModelForm):
    class Meta: 
        model = Lawyer
        fields = ['firstName', 'secondName', 'phoneNumber', 'email', 'password']
    def save(self, commit=True):
        user = super().save(commit=False)
        user.password = make_password(self.cleaned_data['password'])
        if commit:
            user.save()
        return user
    from django.contrib.auth.forms import AuthenticationForm
