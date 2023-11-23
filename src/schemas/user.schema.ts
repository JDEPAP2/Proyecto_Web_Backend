import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true , unique: true})
  user: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({alias: "is_active"})
  isActive: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ alias:"last_name", required: true })
  lastName: string;

  @Prop({ alias:"born_date", type: mongoose.Schema.Types.Date})
  bornDate: Date;

  @Prop({ alias:"type_iden"})
  typeIden: string;

  @Prop({ alias:"number_iden" , unique: true})
  numberIden: number;
}

export const UserSchema = SchemaFactory.createForClass(User);