from rest_framework import serializers
from api.models import ConfigItem


class ConfigItemSerializer(serializers.ModelSerializer):
    framework_name = serializers.SerializerMethodField()
    framework_type = serializers.SerializerMethodField()

    class Meta:
        model = ConfigItem
        fields = ("pk", "framework_name", "framework_type")

    def get_framework_name(self, obj):
        return obj.framework.name

    def get_framework_type(self, obj):
        return obj.framework.get_ftype_display()
