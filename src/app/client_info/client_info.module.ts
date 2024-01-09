import { Module } from '@nestjs/common';
import { ClientInfoService } from './client_info.service';
import { ClientInfoController } from './client_info.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../auth/schemas/users.schema";

@Module({
  providers: [ClientInfoService],
  controllers: [ClientInfoController],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class ClientInfoModule {}
