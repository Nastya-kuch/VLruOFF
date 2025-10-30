from django.urls import path
from . import views

urlpatterns = [
    path('outages/', views.OutageList.as_view(), name='outage-list'),
    path('outages/current/', views.CurrentOutages.as_view(), name='current-outages'),
    path('buildings/<int:building_id>/outages/', views.BuildingOutages.as_view(), name='building-outages'),
]