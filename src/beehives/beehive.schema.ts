import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BeehiveDocument = HydratedDocument<Beehive>;

@Schema()
export class Beehive {
  @Prop()
  name: string;

  //! When you've changed this value, you'll need to let Mongoose know using `markModified('creationDate')`
  @Prop()
  creationDate: Date;
}

export const BeehiveSchema = SchemaFactory.createForClass(Beehive)
