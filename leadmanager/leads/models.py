from django.db import models

# A single model maps to a single database table
class Lead(models.Model):
    name = models.CharField(max_length=100)
    # cannot have more than one:
    email = models.EmailField(max_length=100, unique=True)
    # Optional field:
    message = models.CharField(max_length=500, blank=True)
    # Auto add date:
    created_at = models.DateTimeField(auto_now_add=True)