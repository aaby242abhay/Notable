from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.createNote, name = 'createNote'),
    path('update/<str:pk>/', views.updateNote, name = 'updateNote'),
    path('delete/<str:pk>/', views.deleteNote, name = 'deleteNote'),
    path('routes/', views.getRoutes, name = 'routes'),
    path('', views.getNotes, name = 'notes'),
    path('<str:pk>/', views.getNote, name = 'note'),
  
]
