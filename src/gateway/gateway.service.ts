import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../app/auth/schemas/users.schema";
import { Model } from "mongoose";
import { Chat, ChatDocumnet } from '../app/chat/schemas/chat.schema';

@Injectable()
export class GatewayService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocumnet>,
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

  async isEmojiHasBenSet(body, server) {
    const { token, chatId } = body;

    const chat = await this.chatModel.findOne({ _id: chatId });

    const user = await this.userModel.findOne({ password: token });

    if (chat && user) {
      chat.usersId.forEach((item: string) => {
        if (item !== user.id.toString()) {
          server.in(item).emit('emoji', { message: 'emoji has ben set' });
        }
      })
    }
  }
}
