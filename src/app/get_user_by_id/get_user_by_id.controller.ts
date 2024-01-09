import { Body, Controller, Post } from "@nestjs/common";
import { GetUserByIdService } from "./get_user_by_id.service";

@Controller('api/get-user-by-id')
export class GetUserByIdController {
  constructor(private getUserByIdService: GetUserByIdService) {  }


  @Post()
  getUserById(@Body() body: { id: string, token: string }) {
    return this.getUserByIdService.getUserById(body);
  }

}
