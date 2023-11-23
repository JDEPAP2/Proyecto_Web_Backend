import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Chat } from './chat.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Chat' })
  chat: Chat;

  @Prop()
  type: string;

  @Prop({type: mongoose.Schema.Types.Mixed})
  content: any;

  @Prop()
  received: boolean;

  @Prop()
  seen: boolean;

  @Prop({name: 'send_date', type: mongoose.Schema.Types.Date})
  sendDate: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);