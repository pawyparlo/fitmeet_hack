from fitmeet.models.user import UserBase
from fitmeet.models.activity import Activity
import graphene

from graphene_django import DjangoObjectType


class ActivityType(DjangoObjectType):
    class Meta:
        model = Activity


class ActivityInput(graphene.InputObjectType):
    activity_id = graphene.ID()
    frequency_per_week = graphene.String()
    level = graphene.String()
    name = graphene.String()


class SetUserAcitivities(graphene.Mutation):
    class Arguments:
        activities_input = graphene.List(ActivityInput, required=True)
        user_id = graphene.ID()

    all_activities = graphene.List(ActivityType)

    @staticmethod
    def mutate(_root, info, activities_input: graphene.List(ActivityInput), user_id):
        Activity.objects.filter(user__id=user_id).delete()
        for activity_input in activities_input:
            Activity.objects.create(
                frequency_per_week=activity_input.frequency_per_week,
                level=activity_input.level,
                name=activity_input.name,
                user=UserBase.objects.get(pk=user_id),
            )
        return SetUserAcitivities(
            added_activities=Activity.objects.filter(user__id=user_id)
        )


class ActivityMutation(graphene.ObjectType):
    set_user_activities = SetUserAcitivities.Field()
