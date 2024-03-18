import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection, OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { GatewayService } from "./gateway.service";
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../app/auth/schemas/users.schema';
import { Model } from 'mongoose';
import { User } from '../app/models/user.model';
import { Chat, ChatDocumnet } from '../app/chat/schemas/chat.schema';
import { HttpService } from '@nestjs/axios';
import * as mongoose from 'mongoose';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MyGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  constructor(
    private httpService: HttpService,
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocumnet>,
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>,
    private gatewayService: GatewayService) {  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() body: any,
    @ConnectedSocket() client:any
  ) {
    const clientToken: string = body.token;
    const clientData = await this.userModel.findOne({ password: clientToken });

    if (!clientData) {
      client.disconnect();
    } else {
      const clientId: string = clientData._id.toString();

      if (body.chatId) {
        const chatId: string = body.chatId;
        const chat = await this.chatModel.findById(chatId);
        const date: Date = new Date();
        const obj:any = chat.toObject();

        const newMesage = {
          message: body.message,
          id: new mongoose.Types.ObjectId().toString(),
          userId: clientId,
          emoji: false,
          date: {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            date: date.getDate()
          }
        }

        obj.messages.push(newMesage);

        const updatedChat = await this.chatModel.findByIdAndUpdate(chatId, obj, { new: true })

        const headersRequest = {
          'Authorization': `key=AAAAzx6jK8E:APA91bFpbSR3Uw6xH4aKn4BjwLBF1r7dk9xC0ogrOwtkKplhdirkmkxFXSNzhxRDZ1dY9uo0oEWHO23NCCbpVHl9QAu14cne28lf2kpRnaifYCN3znPqCoEiKnZHgRm_96Pw_5tf2dHV`,
        };

        chat.usersId.forEach((item: string) => {
          if (item != clientId) {
            this.server.to(item).emit('message', newMesage);

            async function sendNotification (userModel, httpService) {
              const senderUser:any = await userModel.findById(clientId);
              const receiverUser:any = await userModel.findById(item);

              const message = {
                notification: {
                  title: senderUser.name,
                  body: body.message,
                },
                to : receiverUser.device
              }

              httpService.post('https://fcm.googleapis.com/fcm/send',  message,
                { headers: headersRequest }).subscribe();
            }
            sendNotification(this.userModel, this.httpService);
          }
        })
      }
    }
  }

  @SubscribeMessage('join')
  async join(@MessageBody() body, @ConnectedSocket() client) {
    client.join(body.id);
  }

  @SubscribeMessage('emoji')
  async setEmoji(@MessageBody() body) {
    await this.gatewayService.isEmojiHasBenSet(body, this.server);
  }

  async handleConnection(client: Socket) {
    // this.server.emit('isOnline', true);
    const socketToken:string = client.handshake.auth?.token;;
    const socket:any = await this.userModel.findOne({ password: socketToken });

    if (socket) {
      let modifiedSocket:User = socket.toObject();
      modifiedSocket.isOnline = true;

      await this.userModel.findByIdAndUpdate(socket._id, modifiedSocket);
    } else  {
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    const socketToken:string = client.handshake.auth?.token
    const socket:any = await this.userModel.findOne({ password: socketToken });

    this.server.emit('isOnline', false);

    if (socket) {
      let modifiedSocket: User = await socket.toObject();
      const date: Date = new Date();

      modifiedSocket.last_connection.date = date.getDate();
      modifiedSocket.last_connection.day = date.getDay();
      modifiedSocket.last_connection.hours = date.getHours();
      modifiedSocket.last_connection.year = date.getFullYear();
      modifiedSocket.last_connection.minutes = date.getMinutes();
      modifiedSocket.last_connection.month = date.getMonth();
      modifiedSocket.isOnline = false;

      await this.userModel.findByIdAndUpdate(
        socket._id,
        modifiedSocket
      )
    } else  {
      client.disconnect();
    }
  }
}