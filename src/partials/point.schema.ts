import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Point {
  @Prop({enum: ['Point'], required: true})
  type: string;

  @Prop({index: "2dsphere"})
  coordinates: number[]
}