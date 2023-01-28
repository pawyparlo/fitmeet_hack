import graphene

from fitmeet.schemas.user import UserMutation, UserQuery


class Query(UserQuery):
    pass


class Mutation(UserMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
