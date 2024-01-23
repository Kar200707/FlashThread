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

  @Post('/check')
  checkChat(@Body() body: { id1: string, id2: string }) {
    return this.chatService.checkChat(body.id1, body.id2);
  }

  @Post('/get')
  getChat(@Body() body) {
    return this.chatService.getChat(body);
  }
}
