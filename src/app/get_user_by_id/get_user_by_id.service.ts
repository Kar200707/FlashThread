import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../auth/schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class GetUserByIdService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

  async getUserById(data: { id: string, token: string }) {
    const { id, token } = data;

    if (!id || !token) {
      throw new HttpException('not sender id or token', HttpStatus.BAD_REQUEST)
    }

    const authUser = await  this.userModel.findOne({ password: token })

    if (!authUser) {
      throw new UnauthorizedException('No user found with this token');
    }

    try {
      const user = await this.userModel.findById(id);

      let modifedData = user.toObject();

      modifedData.id = user._id;
      modifedData.avatar = process.env.HOST + user.avatar;
      delete modifedData._id
      delete modifedData.__v
      delete modifedData.password

      return modifedData;
    } catch (error) {
      throw new HttpException('User with this id does not exist', HttpStatus.BAD_REQUEST)
    }
  }
}
