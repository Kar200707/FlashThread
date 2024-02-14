import { Module } from '@nestjs/common';
import { EmailVerifyController } from './email-verify.controller';
import { EmailVerifyService } from './email-verify.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../auth/schemas/users.schema';

@Module({
  controllers: [EmailVerifyController],
  providers: [EmailVerifyService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class EmailVerifyModule {}
