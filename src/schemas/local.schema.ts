import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type LocalDocument = HydratedDocument<Local>;

export class Address {
    loc: {
        type: string,
        coordinates: [number]
    }
    name: string
    street: string
    postalCode: string
}

@Schema()
export class Local {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ name:"post_date", type: mongoose.Schema.Types.Date })
  postDate: Date;

  @Prop({ name:"mod_date", type: mongoose.Schema.Types.Date })
  modDate: Date;

  @Prop({type: Address})
  address: Address;

  @Prop()
  description: string

}

export const LocalSchema = SchemaFactory.createForClass(Local);

