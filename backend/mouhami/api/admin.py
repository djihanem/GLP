from django.contrib import admin

# Register your models here.
from .models import Commentaire
from .models import Lawyer,Note

admin.site.register(Commentaire)
admin.site.register(Lawyer)
admin.site.register(Note)

