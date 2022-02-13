from rest_framework import serializers
from leads.models import Lead

# lead serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        # grab all fields from Lead
        fields = '__all__'