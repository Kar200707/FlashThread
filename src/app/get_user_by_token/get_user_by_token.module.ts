import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../auth/schemas/users.schema";
import { GetUserByTokenController } from './get_user_by_token.controller';
import { GetUserByTokenService } from './get_user_by_token.service';

@Module({
  controllers: [GetUserByTokenController],
  providers: [GetUserByTokenService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class GetUserByTokenModule {}
