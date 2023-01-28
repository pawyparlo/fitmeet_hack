from django.db import models
from fitmeet.models.user import UserBase


class Activity(models.Model):
    frequency_per_week = models.IntegerField()
    level = models.FloatField()
    name = models.CharField(max_length=50, null=False, blank=False)
    user = models.ForeignKey(
        UserBase,
        related_name="users_activities",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )
