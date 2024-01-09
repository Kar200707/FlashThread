import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../auth/schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class SearchUserService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }


  async onSearch (searchValue) {
    const searchUser:any = await this.userModel.find({ name: searchValue });

    const modifedData = [];

    searchUser.forEach((item, i) => {
      let obj = searchUser[i].toObject();

      obj.avatar = process.env.HOST + searchUser[i].avatar
      obj.id = searchUser[i].id;
      delete obj.password
      delete obj._id;
      delete obj.__v;

      modifedData[i] = obj;
    })

    return modifedData;
  }

}
