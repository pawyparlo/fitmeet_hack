import math
from fitmeet.models.activity import Activity
from fitmeet.models.user import UserBase
from django.db.models import Q
import graphene

from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = UserBase


class UserInput(graphene.InputObjectType):
    login = graphene.String()
    name = graphene.String()
    sex = graphene.String()
    age = graphene.Int()
    description = graphene.String()
    email = graphene.String()
    password = graphene.String()
    location = graphene.String()


class MatchType(graphene.ObjectType):
    def __init__(self, points, same_activities, user) -> None:
        self.points = points
        self.same_activities = same_activities
        self.user = user

    points = graphene.Int()
    same_activities = graphene.List(graphene.String)
    location = graphene.String()
    user = graphene.Field(UserType)


class Match:
    points: int
    same_activities: dict[str, str]
    location: str


class UserQuery(graphene.ObjectType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, user_id=graphene.ID())
    get_user_matches = graphene.List(MatchType, user_id=graphene.ID())

    @staticmethod
    def resolve_users(_root_, _info, **kwargs):
        return UserBase.objects.all()

    @staticmethod
    def resolve_user(root, info, user_id):
        return UserBase.objects.get(pk=user_id)

    @staticmethod
    def __sort_and_score_matches(matches, current_user, user_activities):
        scored_matches = []
        for match in matches:
            scored_match = MatchType(0, [], match)
            scored_match.points = 0
            if match.location == current_user.location:
                scored_match.points += 1
            for activity in match.users_activities:
                if activity.name in user_activities.keys():
                    scored_match.points += 1
                    scored_match.same_activities += ()
                    if math.isclose(
                        activity.level,
                        user_activities[activity.name],
                        abs_tol=10,
                    ):
                        scored_match.points += 1
            scored_matches.append(scored_match)
        return sorted(scored_match, key=lambda x: x.points)

    @staticmethod
    def resolve_get_user_matches(root, info, user_id):
        current_user = UserBase.objects.get(pk=user_id)
        user_activities = {}
        for activity in current_user.users_activities:
            user_activities[activity.name] = activity.level
        all_matches = UserBase.objects.filter(
            Q(location=current_user.location)
            | Q(user_activities__name__in=user_activities.keys())
        )
        return UserQuery.__sort_and_score_matches(
            all_matches, current_user, user_activities
        )


class CreateUserMutation(graphene.Mutation):
    class Arguments:
        input_user = UserInput(required=True)

    user = graphene.Field(UserType)

    @staticmethod
    def mutate(_root, info, input_user: UserInput):
        user = UserBase.objects.create(
            name=input_user.name,
            sex=input_user.sex,
            age=input_user.age,
            description=input_user.description,
            password=input_user.password,
            email=input_user.email,
            login=input_user.login,
            location=input_user.location,
        )
        return CreateUserMutation(user=user)


class UpdateUserMutation(graphene.Mutation):
    class Arguments:
        user_id = graphene.ID(required=True)
        input_user = UserInput(required=True)

    user = graphene.Field(UserType)

    @staticmethod
    def mutate(_root, info, user_id, input_user: UserInput):
        user = UserBase.objects.get(pk=user_id)
        user.name = input_user.name
        user.sex = input_user.sex
        user.age = input_user.age
        user.description = input_user.description
        user.password = input_user.password
        user.email = input_user.email
        user.login = input_user.login
        user.location = input_user.location
        user.full_clean()
        user.clean
        return UpdateUserMutation(user=user)


class DeleteUserMutation(graphene.Mutation):
    class Arguments:
        user_id = graphene.ID(required=True)

    ok = graphene.Boolean()

    @staticmethod
    def mutate(_root, info, user_id):
        UserBase.objects.get(pk=user_id).delete()
        return DeleteUserMutation(ok=True)


class LoginUserMutation(graphene.Mutation):
    class Arguments:
        login = graphene.String(required=True)
        password = graphene.String(required=True)

    ok = graphene.Boolean()

    @staticmethod
    def mutate(_root, info, login, password):
        if UserBase.objects.filter(login=login, password=password).exists():
            return LoginUserMutation(ok=True)
        else:
            return LoginUserMutation(ok=False)


class UserMutation(graphene.ObjectType):
    create_user = CreateUserMutation.Field()
    delete_user = DeleteUserMutation.Field()
    update_user = UpdateUserMutation.Field()

    login_user = LoginUserMutation.Field()
