import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../auth/schemas/users.schema";
import { Model } from "mongoose";
import { User } from "../models/user.model";
import * as process from "process";

@Injectable()
export class ClientInfoService {
  constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>) {  }

  async getInfo(body: { token: string }) {
    if (!body.token) {
      throw new HttpException('Token not sent correctly', HttpStatus.BAD_REQUEST)
    }

    const userData = await this.userModel.findOne({ password: body.token })

    if (!userData) {
      throw new HttpException('There is no user matching this token', HttpStatus.BAD_REQUEST)
    }

    let modifedData:User = userData.toObject();

    modifedData.id = userData._id;
    modifedData.avatar = process.env.HOST + userData.avatar;
    delete modifedData.password;
    delete modifedData.__v;
    delete modifedData._id;


    return modifedData;
  }

}
