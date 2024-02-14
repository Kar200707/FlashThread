import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Chat, ChatDocumnet } from "./schemas/chat.schema";
import { Model } from "mongoose";
import { ChatInterface } from "../models/chat.model";
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import mongoose from 'mongoose';

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

  async addChat(body) {
    const { clientToken, userId, message } = body;

    if (!clientToken) {
      throw new HttpException('client token not selected', HttpStatus.BAD_REQUEST);
    }

    const user = await this.usersModel.findOne({ password: clientToken });

    if (!user) {
      throw new HttpException('User with this token does not exist', HttpStatus.BAD_REQUEST)
    }

    const date:Date = new Date();
    const chatObj = {
      usersId: [
        userId,
        user.id
      ],
      messages: [
        {
          userId: user.id,
          message: message,
          id: new mongoose.Types.ObjectId().toString(),
          date: {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            date: date.getDate()
          }
        }]
    }

    const createdChat = await this.chatModel.create(chatObj);

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

  async getClientActiveChats(@Body() body) {
    const { token } = body;

    if (!token) {
      throw new HttpException('not selected id', HttpStatus.BAD_REQUEST);
    }

    const userData = await this.usersModel.findOne({ password: token });

    if (!userData) {
      throw new HttpException('not valid token', HttpStatus.BAD_REQUEST);
    }

    const userID: string = userData.id;

    const chats = await this.chatModel.find();

    let modifiedChats = [];

    chats.forEach((item, i) => {
      item.usersId.forEach(id => {
        if (id === userID) {
          modifiedChats[i] = item;
        }
      })
    })

    return modifiedChats;
  }

  async removeMessage(token:string, chatId: string, messageId: string) {
    if (!token) {
      throw new HttpException('not selected token', HttpStatus.BAD_REQUEST);
    }
    if (!chatId) {
      throw new HttpException('not selected chatId', HttpStatus.BAD_REQUEST);
    }
    if (!messageId) {
      throw new HttpException('not selected messageId', HttpStatus.BAD_REQUEST);
    }

    const userData = await this.usersModel.findOne({ password: token });

    if (!userData) {
      throw new HttpException('User with this token does not exist', HttpStatus.BAD_REQUEST)
    }

    try {
      const chatData = await this.chatModel.findOne({ _id: chatId });

      const modifiedMessages:any = [];

      chatData.messages.forEach(item => {
        if (item.id.toString() === messageId) {
          if (item.userId !== userData.id) {
            throw new HttpException('delete not', HttpStatus.BAD_REQUEST);
          }
        }
        if (item.id.toString() !== messageId) {
          modifiedMessages.push(item)
        }
      })

      const newChat = chatData.toObject();
      newChat.messages = modifiedMessages;

      await this.chatModel.findOneAndUpdate({ _id: chatId }, newChat)

      return modifiedMessages
    } catch (e) {
      throw new HttpException('Chat or Message with this id does not exist', HttpStatus.BAD_REQUEST);
    }
  }
}
