import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ChatDocumnet = Chat & Document;

@Schema({ collection: 'chats' })
export class Chat {
  @Prop()
  usersId: string[];

  @Prop()
  messages: [
    {
      message: string,
      userId: string,
      date: {
        day: number,
        month: number,
        year: number,
        hours: number,
        minutes: number,
        date: number
      }
    }
  ]
}

export const ChatSchema = SchemaFactory.createForClass(Chat);