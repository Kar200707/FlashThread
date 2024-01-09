import { Module } from '@nestjs/common';
import { GetUserByIdController } from './get_user_by_id.controller';
import { GetUserByIdService } from './get_user_by_id.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../auth/schemas/users.schema";

@Module({
  controllers: [GetUserByIdController],
  providers: [GetUserByIdService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class GetUserByIdModule {}
