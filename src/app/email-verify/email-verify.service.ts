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

  async sendVerifyCode(token: string) {
    const userData = await this.userModel.findOne({ password: token });
    if (!userData) {
      throw new HttpException('user with this id not registered', HttpStatus.BAD_REQUEST);
    }

    const randomNum1:number = Math.floor(Math.random() * 9);
    const randomNum2:number = Math.floor(Math.random() * 9);
    const randomNum3:number = Math.floor(Math.random() * 9);
    const randomNum4:number = Math.floor(Math.random() * 9);
    const randomNum5:number = Math.floor(Math.random() * 9);
    const verifyCode:string = `${randomNum1}${randomNum2}${randomNum3}${randomNum4}${randomNum5}`;

    let modifiedUserData = userData.toObject();
    modifiedUserData.mailVerifyCode = verifyCode;
    await this.userModel.findOneAndUpdate({ password: token }, modifiedUserData);

    await this.mailerService.sendMail({
      to: userData.email,
      subject: 'Email verify code!',
      html:
        `
          <h1 style="color: #1f1f1f; font-weight: bolder; text-align: center; font-size: 130px">
            ${verifyCode}
          </h1>
        `
    })

    return { message: 'code has ben send. Check email' }
  }

  async checkVerifyCode(body: { token: string, code: string }) {
    const { token, code } = body;

    if (!token) {
      throw new HttpException('not selected token', HttpStatus.BAD_REQUEST);
    }

    if (!code) {
      throw new HttpException('not selected code', HttpStatus.BAD_REQUEST);
    }

    const userData = await this.userModel.findOne({ password:  token });

    if (!userData) {
      throw new HttpException('user with this token not registered', HttpStatus.BAD_REQUEST);
    }

    if (code === userData.mailVerifyCode) {
      const modifiedData = userData.toObject();
      modifiedData.isMailVerify = true;
      await this.userModel.findByIdAndUpdate(userData.id , modifiedData, { new: true });

      await this.mailerService.sendMail({
        to: userData.email,
        subject: 'Welcome to Flash Thread',
        text: 'welcome',
        html: `<h1 style="color: #3f51b5">Hello! ${ userData.name }. Thanks for email verifying</h1>`
      })

      return { message: 'email verify successfully' };
    } else {
      const modifiedData = userData;
      modifiedData.isMailVerify = false;

      await this.userModel.findByIdAndUpdate(userData.id , modifiedData, { new: true });

      throw new HttpException('email verify not successfully', HttpStatus.BAD_REQUEST)
    }
  }
}
