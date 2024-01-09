import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Chat, ChatDocumnet } from "./schemas/chat.schema";
import { Model } from "mongoose";

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) chatModel: Model<ChatDocumnet>) {  }

  addChat(body) {

  }
}
