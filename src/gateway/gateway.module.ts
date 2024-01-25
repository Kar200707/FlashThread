import { Module } from "@nestjs/common";
import { MyGateway } from "./gateway";
import { GatewayService } from './gateway.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../app/auth/schemas/users.schema";
import { Chat, ChatSchema } from '../app/chat/schemas/chat.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [MyGateway, GatewayService],
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ]),
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema }
    ])
  ]
})
export class GatewayModule {  }