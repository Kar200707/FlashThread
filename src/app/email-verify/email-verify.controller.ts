import { Body, Controller, Post } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';

@Controller('api/email-verify/code')
export class EmailVerifyController {

  constructor(private emailVerifyService: EmailVerifyService) {  }

  @Post('send')
  sendVerifyCode(@Body() data: { token: string }) {
    return this.emailVerifyService.sendVerifyCode(data.token)
  }

    @Post('check')
  checkVerifyCode(@Body() data: { token: string, code: string }) {
    return this.emailVerifyService.checkVerifyCode(data);
  }
}
