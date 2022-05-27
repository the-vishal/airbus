from django.contrib import admin
from api.models import ConfigItem, Framework


@admin.register(ConfigItem, site=admin.site)
class ConfigItemAdmin(admin.ModelAdmin):
    pass


@admin.register(Framework, site=admin.site)
class ConfigItemAdmin(admin.ModelAdmin):
    pass
