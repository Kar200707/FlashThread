import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenerateContentResult, GoogleGenerativeAI } from '@google/generative-ai';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AiService {
  genAi:GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_AEY);
  model = this.genAi.getGenerativeModel({
    model: "gemini-pro",
  })

  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

  async ai(message: string, userToken: string) {
    if (!message) {
      throw new HttpException('message not selected', HttpStatus.BAD_REQUEST);
    }
    if (!userToken) {
      throw new HttpException('userToken not selected', HttpStatus.BAD_REQUEST);
    }
    const userData = await this.userModel.findOne(
      { password: userToken }
    )
    if (!userData) {
      throw new HttpException('this token not valid id', HttpStatus.BAD_REQUEST);
    }

    const aiGeneratedData: GenerateContentResult = await this.model.generateContent(message);

    return { aiGeneratedmessage: aiGeneratedData.response.text().toString() };
  }
}
