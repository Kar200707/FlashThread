import { Module } from "@nestjs/common";
import { MyGateway } from "./gateway";
import { GatewayService } from './gateway.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../app/auth/schemas/users.schema";

@Module({
  providers: [MyGateway, GatewayService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class GatewayModule {  }