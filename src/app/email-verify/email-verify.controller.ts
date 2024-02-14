import { Body, Controller, Post } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';

@Controller('api/email-verify')
export class EmailVerifyController {

  constructor(private emailVerifyService: EmailVerifyService) {  }

  @Post()
  verify(@Body() data: { token: string }) {
    return this.emailVerifyService.verify(data.token)
  }
}
