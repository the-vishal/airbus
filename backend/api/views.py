import os
import zipfile

from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from django.conf import settings
from django.http import HttpResponse
from api.models import ConfigItem
from .choices import SERVER, CLIENT, DATABASE
from api.serializers import ConfigItemSerializer


class ListItemsView(generics.ListAPIView):
    # permissions_classes = (IsAuthenticated,)
    # authentication_classes = (TokenAuthentication, )
    serializer_class = ConfigItemSerializer

    def get_queryset(self):
        configs = ConfigItem.objects
        return configs.all()


class CreateProjectView(APIView):
    # permissions_classes = (IsAuthenticated,)
    # authentication_classes = (TokenAuthentication, )

    def make_dir_and_execute(self, b_createapp, f_createapp):
        #can be move to celery background task
        os.chdir('/tmp')
        os.mkdir(self.project_name)
        os.system(b_createapp)
        os.system(f_createapp)

    def zip_project(self, response):
        compressed = zipfile.ZipFile(response, 'w', zipfile.ZIP_DEFLATED)
        for dirname, subdirs, files in os.walk(f"/tmp/{self.project_name}"):
            compressed.write(dirname)
            for filename in files:
                compressed.write(os.path.join(dirname, filename))

        # for filename in data:
        #     compressed.writestr(zinfo_or_arcname=filename, data=data[filename])
        compressed.close()

    def process_commands(self):
        b_createapp = self.backend.createapp.format(self.project_name)
        f_createapp = self.frontend.createapp.format(self.project_name)

    def post(self, request):
        data = request.data
        server_framework = data.get('serverFramework')
        client_framework = data.get('clientFramework')
        project_name = data.get('projectName')
        # user = request.user

        status = "error"
        message = "Invalid product id"
        code = 400

        self.project_name = project_name
        self.backend = ConfigItem.objects.filter(pk=server_framework, ftype=SERVER, active=True)
        self.frontend = ConfigItem.objects.filter(pk=client_framework, ftype=CLIENT, active=True)

        response = Response([{
            "status": status,
            "message": message}
        ], code)

        if self.backend and self.frontend:
            citem = CartItem.objects.create(product=product, quantity=qty)
            cart.items.add(citem)
            status = "success"
            message = "Item has been added to cart"
            code = 200
            response = HttpResponse(content_type='application/zip')
            self.zip_project(response)
            response['Content-Disposition'] = f'attachment; filename={self.project_name}.zip'
        return response



