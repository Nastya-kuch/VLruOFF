from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from django.shortcuts import get_object_or_404
import json
from .models import Outage, Building, Organization

@method_decorator(csrf_exempt, name='dispatch')
class OutageList(View):
    def get(self, request):
        outages = Outage.objects.all()[:50]  # Ограничиваем вывод
        data = []
        for outage in outages:
            data.append({
                'id': outage.id,
                'organization': outage.organization.name,
                'buildings': [{'id': b.id, 'address': b.address} for b in outage.buildings.all()],
                'type': outage.outage_type,
                'type_display': outage.get_outage_type_display(),
                'start_time': outage.start_time.isoformat(),
                'end_time': outage.end_time.isoformat(),
                'description': outage.description
            })
        return JsonResponse(data, safe=False)
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            
            # Создаем отключение
            outage = Outage.objects.create(
                organization_id=data['organization_id'],
                outage_type=data['outage_type'],
                start_time=data['start_time'],
                end_time=data['end_time'],
                description=data.get('description', '')
            )
            
            # Добавляем здания
            building_ids = data.get('building_ids', [])
            if building_ids:
                outage.buildings.set(building_ids)
            
            return JsonResponse({
                'status': 'success', 
                'outage_id': outage.id
            })
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

class BuildingOutages(View):
    def get(self, request, building_id):
        building = get_object_or_404(Building, id=building_id)
        outages = Outage.objects.filter(buildings=building)
        
        data = []
        for outage in outages:
            data.append({
                'id': outage.id,
                'organization': outage.organization.name,
                'type': outage.outage_type,
                'type_display': outage.get_outage_type_display(),
                'start_time': outage.start_time.isoformat(),
                'end_time': outage.end_time.isoformat(),
                'description': outage.description
            })
        
        return JsonResponse(data, safe=False)

class CurrentOutages(View):
    def get(self, request):
        from django.utils import timezone
        now = timezone.now()
        
        outages = Outage.objects.filter(
            start_time__lte=now,
            end_time__gte=now
        )
        
        data = []
        for outage in outages:
            data.append({
                'id': outage.id,
                'organization': outage.organization.name,
                'buildings': [b.address for b in outage.buildings.all()],
                'type': outage.outage_type,
                'type_display': outage.get_outage_type_display(),
                'start_time': outage.start_time.isoformat(),
                'end_time': outage.end_time.isoformat(),
                'description': outage.description
            })
        
        return JsonResponse(data, safe=False)