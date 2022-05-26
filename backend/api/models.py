from django.db import models
from .choices import FRAMEWORK_TYPES

# Create your models here.


class Framework(models.Model):
    name = models.CharField(null=True, blank=True, max_length=20)
    language = models.CharField(null=True, blank=True, max_length=100)
    ftype = models.PositiveIntegerField(default=0, choices=FRAMEWORK_TYPES)

    def __str__(self):
        return f'{self.name} : {self.get_ftype_display()}'


class ConfigItem(models.Model):
    framework = models.ForeignKey(Framework, on_delete=models.CASCADE)
    createapp = models.CharField(null=True, blank=True, max_length=100)
    runserver = models.CharField(null=True, blank=True, max_length=100)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.framework}'
