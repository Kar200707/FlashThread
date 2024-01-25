import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../auth/schemas/users.schema';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  providers: [
    UserService,
  ],
  controllers: [UserController],
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class UserModule {}
