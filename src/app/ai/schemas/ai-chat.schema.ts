import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AiChatInterface } from '../../models/ai-chat.model';

export type AiChatDocumnet = AiChat & Document;

@Schema({ collection: 'ai_chats' })
export class AiChat {
  @Prop({ required: true })
  userId: string

  @Prop({ required: true})
  messages: [
    {
      message: string,
      sender: string,
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

export const AiChatSchema = SchemaFactory.createForClass(AiChat);