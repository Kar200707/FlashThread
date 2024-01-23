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

  async getChat(body) {
    const { clientToken, chatId } = body;

    if (!clientToken) {
      throw new HttpException('not selected client token', HttpStatus.BAD_REQUEST);
    }

    if (!chatId) {
      throw new HttpException('not selected chat id', HttpStatus.BAD_REQUEST);
    }

    const userData = await this.usersModel.findOne({ password: clientToken });

    if (!userData) {
      throw new HttpException('user with this token does not exist', HttpStatus.BAD_REQUEST);
    }

    const chatData = await this.chatModel.findById(chatId);

    let isUserIntegerid:boolean = false;
    chatData.usersId.forEach((item, i) => {
      if (item === userData.id) {
        isUserIntegerid = true;
      }
    })

    if (isUserIntegerid) {
      let modifiedData = chatData.toObject();

      modifiedData.id = chatData._id.toString();
      delete modifiedData._id;
      delete modifiedData.__v;

      return modifiedData;
    }
  }

  async addChat(body: ChatInterface) {
    const { clientToken } = body;

    if (!clientToken) {
      throw new HttpException('client token not selected', HttpStatus.BAD_REQUEST);
    }

    const user = await this.usersModel.findOne({ password: clientToken });

    if (!user) {
      throw new HttpException('User with this token does not exist', HttpStatus.BAD_REQUEST)
    }

    console.log(body);
    let modifiedBody: any = body;
    delete modifiedBody.clientToken;

    const createdChat = await this.chatModel.create(modifiedBody);

    let modifiedData:any = createdChat.toObject();

    modifiedData.id = createdChat._id;
    delete modifiedData._id;
    delete modifiedData.__v;
    delete modifiedData.usersId._id;

    return modifiedData;
  }

  async checkChat(id1: string, id2: string) {
    const data1 = await this.chatModel.findOne( {usersId: [ id1, id2 ]},);

    if (data1) {
      let modifiedData: any = data1.toObject();

      modifiedData.id = data1._id;
      delete modifiedData._id;
      delete modifiedData.__v;

      return modifiedData;
    }

    const data2 = await this.chatModel.findOne( {usersId: [ id2, id1 ]},);

    if (data2) {
      let modifiedData: any = data2.toObject();

      modifiedData.id = data2._id;
      delete modifiedData._id;
      delete modifiedData.__v;

      return modifiedData
    }

    return new HttpException('chat not with is ids', HttpStatus.BAD_REQUEST);
  }
}
