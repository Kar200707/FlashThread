import { Body, Controller, Delete, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AiService } from './ai.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/ai')
export class AiController {
  constructor(private aiService: AiService) {  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  ai (@Body() body: { userToken:string, message: string, history: string },
      @UploadedFile() file: Express.Multer.File) {
    const { userToken, message, history } = body;
    console.log(JSON.parse(history));

    return this.aiService.ai(message, userToken, file, JSON.parse(history));
  }

  @Post('chat/get')
  getAiChat(@Body() body: { token: string }) {
    return this.aiService.getAiChat(body.token);
  }

  @Delete('chat/delete')
  deleteAiChat(@Body() body) {
    const { token } = body;

    return this.aiService.deleteAiChat(token);
  }
}
