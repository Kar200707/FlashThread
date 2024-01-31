import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('api/ai')
export class AiController {
  constructor(private aiService: AiService) {  }

  @Post()
  ai (@Body() body) {
    const { userToken, message } = body;

    return this.aiService.ai(message, userToken);
  }
}
