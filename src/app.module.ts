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
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailVerifyModule } from './app/email-verify/email-verify.module';

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
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.MAIL_LOG,
          pass: process.env.MAIL_PASS,
        },
      }
    }),

    // api modules

    AuthModule,
    ClientInfoModule,
    SearchUserModule,
    GetUserByIdModule,
    ChatModule,
    GetUserByTokenModule,
    UserModule,
    AiModule,
    EmailVerifyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
