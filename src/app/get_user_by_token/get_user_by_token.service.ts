import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class GetUserByTokenService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {  }

  async getUser(token: string) {
    const data = await this.usersModel.findOne({ password: token });

    if (!data) {
      throw new HttpException('not valid token', HttpStatus.BAD_REQUEST);
    }

    let modifeiedData:any = data.toObject();

    modifeiedData.id = data._id;
    delete modifeiedData._id;
    delete modifeiedData.__v;
    delete modifeiedData.password;
    delete modifeiedData.isOnline;
    delete modifeiedData.last_connection;
    modifeiedData.avatar = process.env.HOST + data.avatar;

    return modifeiedData;
  }
}
