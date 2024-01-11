import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Chat, ChatDocumnet } from "./schemas/chat.schema";
import { Model } from "mongoose";
import { ChatInterface } from "../models/chat.model";

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private readonly chatModel: Model<ChatDocumnet>) {  }

  async addChat(body: ChatInterface) {
    const createdChat = await this.chatModel.create(body);

    let modifedData:any = createdChat.toObject();

    modifedData.id = createdChat._id;
    delete modifedData._id;
    delete modifedData.__v;
    delete modifedData.usersId._id

    return modifedData;
  }
}
