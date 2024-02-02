import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AiService } from './ai.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/ai')
export class AiController {
  constructor(private aiService: AiService) {  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  ai (@Body() body: { userToken:string, message: string },
      @UploadedFile() file: Express.Multer.File) {
    const { userToken, message } = body;

    return this.aiService.ai(message, userToken, file);
  }
}
