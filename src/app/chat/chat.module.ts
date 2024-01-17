import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Chat, ChatSchema } from "./schemas/chat.schema";
import { Users, UsersSchema } from '../auth/schemas/users.schema';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
  imports: [
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema }
    ]),
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class ChatModule {}