from django.db import models


# Create your models here.

class Note(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=False)
    description = models.CharField(max_length=255, blank=False) 
    body = models.TextField( blank=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]

    class Meta:
        db_table = 'note'
        app_label = 'api'
    