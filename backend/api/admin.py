from django.contrib import admin
from api.models import ConfigItem, Framework, FileAddition


@admin.register(ConfigItem, site=admin.site)
class ConfigItemAdmin(admin.ModelAdmin):
    pass


@admin.register(Framework, site=admin.site)
class ConfigItemAdmin(admin.ModelAdmin):
    pass


@admin.register(FileAddition, site=admin.site)
class FileAdditionAdmin(admin.ModelAdmin):
    pass
