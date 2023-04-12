from rest_framework import serializers
from .models import League, Team, Player

class LeagueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = League
        fields = ('name',)

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    league = serializers.HyperlinkedRelatedField(
        view_name='league_detail',
        queryset=League.objects.all()
    )
    players = serializers.HyperlinkedRelatedField(
        view_name='player_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Team
        fields = ('name', 'region', 'record', 'logo', 'league', 'players')

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    team = serializers.HyperlinkedRelatedField(
        view_name='team_detail',
        queryset=Team.objects.all()
    )

    class Meta:
        model = Player
        fields = ('name', 'age', 'nationality', 'position', 'photo', 'adr', 'headshot_percentage', 'team')

