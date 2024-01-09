import { Body, Controller, Post } from "@nestjs/common";
import { SearchUserService } from "./search_user.service";

@Controller('api/search-user')
export class SearchUserController {
  constructor(private searchUserService: SearchUserService) {  }

  @Post()
  onSearch(@Body() body: any) {
    return this.searchUserService.onSearch(body.name);
  }

}
