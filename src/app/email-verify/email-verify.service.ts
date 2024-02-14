import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmailVerifyService {

  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>,
    private readonly mailerService: MailerService) {  }

  async verify(token: string) {
    const userData = await this.userModel.findOne({ password: token });
    if (!userData) {
      throw new HttpException('user with this id not registered', HttpStatus.BAD_REQUEST);
    }
    const randomNum1 = Math.floor(Math.random() * 9);
    const randomNum2 = Math.floor(Math.random() * 9);
    const randomNum3 = Math.floor(Math.random() * 9);
    const randomNum4 = Math.floor(Math.random() * 9);
    const randomNum5 = Math.floor(Math.random() * 9);
    const verifyCode:string = `${randomNum1}${randomNum2}${randomNum3}${randomNum4}${randomNum5}`;
    console.log(userData);

    return verifyCode
  }
}
