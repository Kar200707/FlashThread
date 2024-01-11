import { Body, Controller, Post } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ChatInterface } from "../models/chat.model";

@Controller('api/chat')
export class ChatController {
  constructor(private chatService: ChatService) {  }

  @Post()
  addChat(@Body() body: ChatInterface) {
    return this.chatService.addChat(body);
  }

}
