import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "../schemas/users.schema";
import { Model } from "mongoose";
import { User } from "../../models/user.model";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {  }


  async signIn (email: string, password: string) {
    const user:User = await this.userModel.findOne({email: email});

    if (!user) {
      throw new UnauthorizedException();
    }

    if(bcrypt.compareSync(password, user.password)) {
      return {
        message: 'login successfully',
        access_token: user.password
      }
    } else {
      throw new UnauthorizedException();
    }
  }

}
