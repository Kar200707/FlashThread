import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { RegisterService } from "./register.service";
import { User } from "../../models/user.model";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('api/reg')
export class RegisterController {
  constructor(private readonly regService: RegisterService) {  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/images/user'
    })
  }))
  async signUp(@Body() body: User, @UploadedFile() file: Express.Multer.File) {
    return this.regService.signUp(body);
  }

}