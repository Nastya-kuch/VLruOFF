from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=200, verbose_name="Название организации")
    contact_phone = models.CharField(max_length=20, verbose_name="Контактный телефон", blank=True)
    
    class Meta:
        verbose_name = "Организация"
        verbose_name_plural = "Организации"
    
    def __str__(self):
        return self.name

class Building(models.Model):
    address = models.CharField(max_length=300, verbose_name="Адрес")
    district = models.CharField(max_length=100, verbose_name="Район", blank=True)
    
    class Meta:
        verbose_name = "Здание"
        verbose_name_plural = "Здания"
    
    def __str__(self):
        return self.address

class Outage(models.Model):
    OUTAGE_TYPES = [
        ('WATER', 'Водоснабжение'),
        ('ELECTRICITY', 'Электричество'),
        ('GAS', 'Газ'),
        ('HEATING', 'Отопление'),
    ]
    
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, verbose_name="Организация")
    buildings = models.ManyToManyField(Building, verbose_name="Здания")
    outage_type = models.CharField(max_length=20, choices=OUTAGE_TYPES, verbose_name="Тип отключения")
    start_time = models.DateTimeField(verbose_name="Время начала")
    end_time = models.DateTimeField(verbose_name="Время окончания")
    description = models.TextField(verbose_name="Описание", blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    
    class Meta:
        verbose_name = "Отключение"
        verbose_name_plural = "Отключения"
        ordering = ['-start_time']
    
    def __str__(self):
        return f"{self.get_outage_type_display()} - {self.start_time.strftime('%d.%m.%Y %H:%M')}"