import {
  MessageBody,
  OnGatewayConnection, OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from "@nestjs/common";
import { GatewayService } from "./gateway.service";
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../app/auth/schemas/users.schema';
import { Model } from 'mongoose';
import { User } from '../app/models/user.model';

@WebSocketGateway({ cors: true })
export class MyGateway implements OnGatewayConnection, OnGatewayDisconnect {

  testDb: any[] = [];

  @WebSocketServer()
  server;

  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>,
    private gatewayService: GatewayService) {  }

  @SubscribeMessage('message')
  async handleMesage(@MessageBody() body:string) {
    this.testDb.push(body);
    this.server.emit('message', this.testDb);
  }

  async handleConnection(client: any, ...args) {
    const socketToken:string = client.handshake.auth?.token;

    const socket:any = await this.userModel.findOne({ password: socketToken });

    let modifiedSocket:User = socket.toObject();

    modifiedSocket.isOnline = true;

    const updatedSocket:any = await this.userModel.findByIdAndUpdate(socket._id, modifiedSocket);
    console.log(modifiedSocket.name, modifiedSocket.isOnline);

    if (socketToken) {
      const user:any = await this.gatewayService.getContectedUser(socketToken)

      Logger.log('Connecting...');
      console.log(`\x1b[33m --------------------- Connected user - ( ${ user.name } ) \x1b[0m`);
    }
  }

  async handleDisconnect(client: any) {
    const socketToken:string = client.handshake.auth?.token

    const socket:any = await this.userModel.findOne({ password: socketToken });

    let modifiedSocket: User = socket.toObject();

    const date: Date = new Date();

    modifiedSocket.last_connection.date = date.getDate();
    modifiedSocket.last_connection.day = date.getDay();
    modifiedSocket.last_connection.hours = date.getHours();
    modifiedSocket.last_connection.year = date.getFullYear();
    modifiedSocket.last_connection.minutes = date.getMinutes();
    modifiedSocket.last_connection.month = date.getMonth();
    modifiedSocket.isOnline = false;

    const updatedSocket = await this.userModel.findByIdAndUpdate(
      socket._id,
      modifiedSocket
    )

    console.log(modifiedSocket.name, modifiedSocket.isOnline);
  }
}