import { Body, Controller, Post } from '@nestjs/common';
import { GetUserByTokenService } from './get_user_by_token.service';

@Controller('api/get-user-by-token')
export class GetUserByTokenController {
  constructor(private getUserByTokenService: GetUserByTokenService) {  }

  @Post()
  getUser(@Body() body) {
    return this.getUserByTokenService.getUser(body.token);
  }

}
