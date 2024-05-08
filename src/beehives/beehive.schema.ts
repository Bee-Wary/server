import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Beehive {
  @Prop()
  name: string;

  //! When you've changed this value, you'll need to let Mongoose know using `markModified('creationDate')`
  @Prop()
  creationDate: Date;
}
