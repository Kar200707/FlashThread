import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../app/auth/schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class GatewayService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }

  async getContectedUser(userToken: string) {
    const user = await this.userModel.findOne({ password: userToken });
    return user;
  }

}
