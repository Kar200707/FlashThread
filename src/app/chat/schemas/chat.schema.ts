import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ChatDocumnet = Chat & Document;

@Schema({ collection: 'chats' })
export class Chat {
  @Prop({ type: { user: String } })
  usersId: {
    user: string
  }

  @Prop()
  messages: [
    {
      message: string,
      userId: string,
      date: {
        day: number,
        month: number,
        year: number,
      }
    }
  ]
}

export const ChatSchema = SchemaFactory.createForClass(Chat);