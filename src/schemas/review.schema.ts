import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Local } from './local.schema';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Local' })
  local: Local;

  @Prop({name: "post_date", type: mongoose.Schema.Types.Date})
  postDate: Date;

  @Prop({name: "mod_date", type: mongoose.Schema.Types.Date})
  modDate: Date;

  @Prop()
  stars: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);