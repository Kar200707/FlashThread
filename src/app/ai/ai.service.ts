import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenerateContentResult, GoogleGenerativeAI } from '@google/generative-ai';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';
import { AiChat, AiChatDocumnet } from './schemas/ai-chat.schema';
import { AiChatInterface } from '../models/ai-chat.model';

@Injectable()
export class AiService {
  genAi:GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_AEY);

  constructor(
    @InjectModel(AiChat.name) private readonly aiChatModel: Model<AiChatDocumnet>,
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

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

      const chatAi:any = await this.aiChatModel.findOne({ userId: userData.id });

      const date: Date = new Date();

      const aiChatData: AiChatInterface = {
        userId: userData.id,
        messages: [
          {
            message: message,
            sender: 'user',
            date: {
              day: date.getDay(),
              month: date.getMonth(),
              year: date.getFullYear(),
              date: date.getDate(),
              hours: date.getHours(),
              minutes: date.getMinutes()
            }
          }
        ]
      }

      if (!chatAi) {
        const createdAiChat = await this.aiChatModel.create(aiChatData);
      } else {
        const addUserMessage = aiChatData

        addUserMessage.messages = chatAi.toObject().messages

        const userNewMessage = {
          message: message,
          sender: 'user',
          date: {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            date: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes()
          }
        }

        addUserMessage.messages.push(userNewMessage);

        const updatedChatAi = await this.aiChatModel.findOneAndUpdate({
          userId: userData.id
        }, addUserMessage);
      }

      const aiNewMessage = {
        message: '',
        sender: 'model',
        date: {
          day: date.getDay(),
          month: date.getMonth(),
          year: date.getFullYear(),
          date: date.getDate(),
          hours: date.getHours(),
          minutes: date.getMinutes()
        }
      }

      if (file) {
        const model = this.genAi.getGenerativeModel({
          model: "gemini-pro-vision",
        })

        const aiGeneratedData: GenerateContentResult =
          await model.generateContent([
            message,
            fileToGenerativePart(file.buffer, file.mimetype)
          ]);

        const newChatAi:any = await this.aiChatModel.findOne({ userId: userData.id });
        const aiSendData:AiChatInterface = newChatAi.toObject();
        const newAiMessage = aiNewMessage
        newAiMessage.message = aiGeneratedData.response.text().toString();
        aiSendData.messages.push(newAiMessage);

        const newUpdatedChatAi:any = await this.aiChatModel.findOneAndUpdate(
          { userId: userData.id },
          aiSendData
        );

        return {
          aiGeneratedMessage: aiGeneratedData.response.text().toString()
        };
      } else  {
        const model = this.genAi.getGenerativeModel({
          model: "gemini-pro",
        })

        const aiGeneratedData: GenerateContentResult = await model.generateContent(message);

        const newChatAi:any = await this.aiChatModel.findOne({ userId: userData.id });
        const aiSendData:AiChatInterface = newChatAi.toObject();
        const newAiMessage = aiNewMessage
        newAiMessage.message = aiGeneratedData.response.text().toString();
        aiSendData.messages.push(newAiMessage);

        const newUpdatedChatAi:any = await this.aiChatModel.findOneAndUpdate(
          { userId: userData.id },
          aiSendData
        );

        return {
          aiGeneratedMessage: aiGeneratedData.response.text().toString()
        };
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.EXPECTATION_FAILED)
    }
  }

  async getAiChat(token :string) {
    if (!token) {
      throw new HttpException('token not selected', HttpStatus.BAD_REQUEST);
    }

    const userData = await this.userModel.findOne({ password: token });

    if (!userData) {
      throw new HttpException('not registerd user for this token', HttpStatus.BAD_REQUEST);
    }

    const aiChat = await this.aiChatModel.findOne({ userId: userData.id });

    const modifiedAiChat = aiChat.toObject();
    delete modifiedAiChat.__v;
    delete modifiedAiChat._id;

    return modifiedAiChat;
  }
}
