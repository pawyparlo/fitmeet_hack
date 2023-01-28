from django.db import models


class UserBase(models.Model):
    SEX_MALE = "M"
    SEX_FEMALE = "F"
    SEX_UNKNOWN = "U"
    SEX_CHOICES = [
        (SEX_MALE, "MALE"),
        (SEX_FEMALE, "FEMALE"),
        (SEX_FEMALE, "UNKNOWN"),
    ]
    login = models.CharField(max_length=50, null=False, blank=False, unique=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=8, choices=SEX_CHOICES, default="U")
    description = models.CharField(max_length=3000)
    email = models.EmailField(null=False, blank=False, unique=True)
    password = models.CharField(null=False, blank=False, max_length=32)
    location = models.CharField(max_length=50)
