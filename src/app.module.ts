import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from "./gateway/gateway.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config/app.config";
import { AuthModule } from "./app/auth/auth.module";
import { ClientInfoModule } from "./app/client_info/client_info.module";
import { SearchUserModule } from "./app/search_user/search_user.module";
import { GetUserByIdModule } from "./app/get_user_by_id/get_user_by_id.module";
import { ChatModule } from "./app/chat/chat.module";
import { GetUserByTokenModule } from './app/get_user_by_token/get_user_by_token.module';
import { UserModule } from './app/user/user.module';
import { AiModule } from './app/ai/ai.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: __dirname + '/../src/flash-thread-frontend/dist/browser'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    GatewayModule,

    // api modules

    AuthModule,
    ClientInfoModule,
    SearchUserModule,
    GetUserByIdModule,
    ChatModule,
    GetUserByTokenModule,
    UserModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
