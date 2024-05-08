import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Frame } from 'src/partials/frame.schema';
import { Point } from 'src/partials/point.schema';

export type BeehiveDocument = HydratedDocument<Beehive>;

@Schema()
export class Beehive {
  @Prop()
  @ApiProperty()
  name: string;

  //! When you've changed this value, you'll need to let Mongoose know using `markModified('creationDate')`
  @Prop({default: Date.now})
  @ApiProperty()
  creationDate: Date;

  @Prop({type: Point})
  @ApiProperty()
  location: Point;

  @Prop()
  @ApiProperty()
  material: string;

  //! When you've changed this value, you'll need to let Mongoose know using `markModified('creationDate')`
  @Prop()
  @ApiProperty()
  lastInspection: Date;

  @Prop()
  @ApiProperty()
  frames: Frame[]
}

export const BeehiveSchema = SchemaFactory.createForClass(Beehive)
