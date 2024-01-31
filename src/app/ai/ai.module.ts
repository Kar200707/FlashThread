import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../auth/schemas/users.schema';

@Module({
  controllers: [AiController],
  providers: [AiService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema }
    ])
  ]
})
export class AiModule {}
