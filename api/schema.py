from typing import Optional

import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from api.models import Messages

#Types
class MessageSchema(SQLAlchemyObjectType):
    class Meta:
        model = Messages

# Mutation
class SendMessage(graphene.Mutation):
    class Arguments:
        full_name = graphene.String()
        email = graphene.String()
        message = graphene.String()

    status = graphene.Boolean()
    msg = graphene.Field(MessageSchema)
    def mutate(root, info, full_name, email, message):
        
        message = Messages(
            full_name=full_name,
            email=email,
            message=message
        )

        message.save()
        
        status = True
        
        return SendMessage(status=status, msg=message)



class Mutations(graphene.ObjectType):
    sendMessage = SendMessage.Field()

class Query(graphene.ObjectType):
    
    message_countcount = graphene.Int()
    
    def resolve_message_count(root, info):
        all_messages = Messages.get_all()
        count = len(all_messages)

        return count

schema = graphene.Schema(query=Query, mutation=Mutations)
