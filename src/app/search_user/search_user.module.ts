import { Module } from '@nestjs/common';
import { SearchUserController } from './search_user.controller';
import { SearchUserService } from './search_user.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "../auth/schemas/users.schema";

@Module({
  controllers: [SearchUserController],
  providers: [SearchUserService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class SearchUserModule {}
