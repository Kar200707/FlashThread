import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { GatewayService } from "./gateway.service";

@WebSocketGateway({ cors: true })
export class MyGateway implements OnGatewayConnection {

  testDb: any[] = [];

  @WebSocketServer()
  server;

  constructor(private gatewayService: GatewayService) {  }

  @SubscribeMessage('message')
  async handleMesage(@MessageBody() body:string) {
    this.testDb.push(body);
    this.server.emit('message', this.testDb);
  }

  async handleConnection(client: any, ...args) {
    const socketToken:string = client.handshake.auth?.token

    if (socketToken) {
      const user = await this.gatewayService.getContectedUser(socketToken)

      Logger.log('Connecting...');
      console.log(`\x1b[33m --------------------- Connected user - ( ${ user.name } ) \x1b[0m`);
    }
  }
}