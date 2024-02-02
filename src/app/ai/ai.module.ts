import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../auth/schemas/users.schema';
import { AiChat, AiChatSchema } from './schemas/ai-chat.schema';

@Module({
  controllers: [AiController],
  providers: [AiService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ]),
    MongooseModule.forFeature([
      { name: AiChat.name, schema: AiChatSchema }
    ])
  ]
})
export class AiModule {}
