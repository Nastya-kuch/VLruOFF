from django.contrib import admin
from .models import Organization, Building, Outage

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ['name', 'contact_phone']
    search_fields = ['name']

@admin.register(Building)
class BuildingAdmin(admin.ModelAdmin):
    list_display = ['address', 'district']
    search_fields = ['address', 'district']

@admin.register(Outage)
class OutageAdmin(admin.ModelAdmin):
    list_display = ['outage_type', 'organization', 'start_time', 'end_time']
    list_filter = ['outage_type', 'start_time']
    filter_horizontal = ['buildings']
    date_hierarchy = 'start_time'