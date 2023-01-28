import graphene

from fitmeet.schemas.user import UserMutation, UserQuery
from fitmeet.schemas.activity import ActivityMutation


class Query(UserQuery):
    pass


class Mutation(UserMutation, ActivityMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
