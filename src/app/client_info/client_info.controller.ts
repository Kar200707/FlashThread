import { Body, Controller, Post } from "@nestjs/common";
import { ClientInfoService } from "./client_info.service";

@Controller('api/client_info')
export class ClientInfoController {
  constructor(private clinetInfoService: ClientInfoService) {  }

  @Post()
  getInfo(@Body() body: { token: string }) {
    return this.clinetInfoService.getInfo(body);
  }

}
