import { Module } from '@nestjs/common';
import { LoginService } from "./login/login.service";
import { LoginController } from "./login/login.controller";
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UsersSchema } from "./schemas/users.schema";

@Module({
  providers: [
    LoginService,
    RegisterService
  ],
  controllers: [
    LoginController,
    RegisterController
  ],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class AuthModule {}
