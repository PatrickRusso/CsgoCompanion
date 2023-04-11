from rest_framework import serializers
from .models import League, Team, Player

class LeagueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = League
        fields = ('name',)

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ('league', 'name', 'region', 'record', 'logo',)

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        fields = ('team', 'name', 'age', 'nationality', 'position', 'photo', 'adr', 'headshot_percentage',)
