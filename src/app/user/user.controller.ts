import { Body, Controller, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { User } from '../models/user.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import e from 'express';

@Controller('api/user')
export class UserController {

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
    console.log(file);
  }

}
