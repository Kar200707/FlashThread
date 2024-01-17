import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../schemas/users.schema";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { User } from "../../models/user.model";

@Injectable()
export class RegisterService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {}

  async signUp(body) {
    if (body.email && body.password && body.name) {
      const user:User = await this.userModel.findOne({email: body.email});

      if (user) {
        throw new UnauthorizedException('this user already exists');
      }

      const hash:string = await bcrypt.hash(body.password, 10);

      const date:Date = new Date();

      let sendObj = {
        email: body.email,
        password: hash,
        name: body.name,
        avatar: !body.avatar ? `/uploads/images/default-user.jpg` : body.avatar,
        last_connection: {
          day: date.getDay(),
          month: date.getMonth(),
          year: date.getFullYear(),
          date: date.getDate(),
          minutes: date.getMinutes(),
          hours: date.getHours()
        },
        l_name: "",
        bio: ""
      }

      const createdData = this.userModel.create(sendObj);

      return {
        messgae: 'register successfully',
        access_token: hash
      };
    } else {
      throw new UnauthorizedException();
    }
  }

}
