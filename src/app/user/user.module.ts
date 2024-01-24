import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../auth/schemas/users.schema';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class UserModule {}
