import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user1: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user2: User;

  @Prop({name:"create_date", type: mongoose.Schema.Types.Date})
  createDate: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);