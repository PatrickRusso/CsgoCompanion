from django.db import models

# Create your models here.

class League(models.Model):
    name = models.CharField(max_length=1000)

    def __str__(self):
        return self.name

class Team(models.Model):
    league = models.ForeignKey(League, on_delete=models.CASCADE, related_name='teams')
    name = models.CharField(max_length=1000)
    region = models.CharField(max_length=1000)
    record = models.CharField(max_length=1000)
    logo = models.CharField(max_length=5000)

    def __str__(self):
        return self.name

class Player(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players')
    name = models.CharField(max_length=1000)
    age = models.IntegerField()
    nationality = models.CharField(max_length=1000)
    position = models.CharField(max_length=1000)
    photo = models.CharField(max_length=5000)
    adr = models.IntegerField()
    headshot_percentage = models.CharField(max_length=1000)

    def __str__(self):
        return self.name