from fitmeet.models.user import UserBase
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


class UserQuery(graphene.ObjectType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, user_id=graphene.ID())

    @staticmethod
    def resolve_users(_root_, _info, **kwargs):
        return UserBase.objects.all()

    @staticmethod
    def resolve_user(root, info, user_id):
        return UserBase.objects.get(pk=user_id)


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
            nick=input_user.nick,
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
