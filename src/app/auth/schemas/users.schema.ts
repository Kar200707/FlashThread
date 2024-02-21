import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UsersDocument = Users & Document;

@Schema({ collection: 'users' })
export class Users {
  @Prop()
  mailVerifyCode: string | undefined

  @Prop()
  isMailVerify: boolean;

  @Prop()
  isOnline: boolean

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: false })
  name: string

  @Prop({ required: false })
  l_name: string

  @Prop({ required: false })
  avatar: string

  @Prop({ required: false })
  bio: string

  @Prop({ required: true,
    type: {
      day: Number,
      month: Number,
      year: Number,
      date: Number,
      hours: Number,
      minutes: Number
    }
  })
  last_connection: {
    day: number,
    month: number,
    year: number,
    date: number,
    hours: number,
    minutes: number
  }

  @Prop()
  devices: string[];

  @Prop()
  device: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);