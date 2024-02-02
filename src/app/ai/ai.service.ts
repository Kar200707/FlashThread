import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenerateContentResult, GoogleGenerativeAI } from '@google/generative-ai';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AiService {
  genAi:GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_AEY);

  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

  async ai(message: string, userToken: string, file: Express.Multer.File) {
    function fileToGenerativePart(file, mimeType) {
      return {
        inlineData: {
          data: file.toString("base64"),
          mimeType
        },
      };
    }

    try {
      // if (!message) {
      //   throw new HttpException('message not selected', HttpStatus.BAD_REQUEST);
      // }
      // if (!userToken) {
      //   throw new HttpException('userToken not selected', HttpStatus.BAD_REQUEST);
      // }
      // const userData = await this.userModel.findOne(
      //   { password: userToken }
      // )
      // if (!userData) {
      //   throw new HttpException('this token not valid id', HttpStatus.BAD_REQUEST);
      // }

      if (file) {
        const model = this.genAi.getGenerativeModel({
          model: "gemini-pro-vision",
        })

        const aiGeneratedData: GenerateContentResult =
          await model.generateContent([
            message,
            fileToGenerativePart(file.buffer, file.mimetype)
          ]);

        return {
          aiGeneratedMessage: aiGeneratedData.response.text().toString()
        };
      } else  {
        const model = this.genAi.getGenerativeModel({
          model: "gemini-pro",
        })

        const aiGeneratedData: GenerateContentResult = await model.generateContent(message);

        return {
          aiGeneratedMessage: aiGeneratedData.response.text().toString()
        };
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.EXPECTATION_FAILED)
    }
  }
}
