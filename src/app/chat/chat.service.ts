import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Chat, ChatDocumnet } from "./schemas/chat.schema";
import { Model } from "mongoose";
import { ChatInterface } from "../models/chat.model";
import { Users, UsersDocument } from '../auth/schemas/users.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocumnet>) {  }

  async addChat(body: ChatInterface) {
    const { clientToken } = body;

    if (!clientToken) {
      throw new HttpException('client token not selected', HttpStatus.BAD_REQUEST);
    }

    const user = await this.usersModel.findOne({ password: clientToken });

    if (!user) {
      throw new HttpException('User with this token does not exist', HttpStatus.BAD_REQUEST)
    }

    console.log(body.usersId[0]);

    return 'test'
    // const createdChat = await this.chatModel.create(body);

    // let modifiedData:any = createdChat.toObject();
    //
    // modifiedData.id = createdChat._id;
    // delete modifiedData._id;
    // delete modifiedData.__v;
    // delete modifiedData.usersId._id;
    //
    // return modifiedData;
  }
}
