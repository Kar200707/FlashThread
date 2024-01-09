import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {  }

  @Post()
  signIn(@Body() body) {
    const { email, password } = body;
    return this.loginService.signIn(email, password);
  }

}
