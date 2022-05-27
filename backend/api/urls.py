from django.urls import re_path
from api.views import ListItemsView, CreateProjectView


urlpatterns = [
    re_path(r'list$', ListItemsView.as_view()),
    re_path(r'create-project$', CreateProjectView.as_view()),
]
