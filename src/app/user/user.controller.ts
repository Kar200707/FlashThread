import { Body, Controller, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { User } from '../models/user.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import e from 'express';
import { UserService } from './user.service';
import { HttpService } from '@nestjs/axios';

@Controller('api/user')
export class UserController {
  constructor(
    private httpService: HttpService,
    private userService: UserService) {  }

  @Put('edit')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./uploads/images/user",
      filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
        const name = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".")[1];
        const newFileName = name.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;

        callback(null, newFileName);
      }
    })
  }))
  edit(@Body() body: User, @UploadedFile() file: Express.Multer.File) {
    const modifiedData: User = body;
    if (file) {
      modifiedData.avatar = '/uploads/images/user/' + file.filename;
    } else {
      modifiedData.avatar = '/uploads/images/default-user.jpg';
    }

    return this.userService.edit(modifiedData);
  }

  @Post('logout')
  logout(@Body() body) {
    return this.userService.logout(body.token);
  }
}
