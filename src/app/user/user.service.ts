import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../auth/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>) {  }

  async edit(body) {
    const { token } = body;
    const user = await this.userModel.findOne({ password: token });

    if (!user) {
      throw new HttpException('this token not vaild', HttpStatus.BAD_REQUEST);
    }

    let modifiedData = user.toObject();

    modifiedData.avatar = body.avatar

    if (body.device) {
      modifiedData.device = body.device;
    }
    if (body.bio) {
      modifiedData.bio = body.bio;
    }
    if (body.l_name) {
      modifiedData.l_name = body.l_name;
    }
    if (body.name) {
      modifiedData.name = body.name;
    }
    if (body.email) {
      modifiedData.email = body.email;
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(user.id, modifiedData);
  }
}
