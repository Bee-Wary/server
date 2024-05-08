import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Frame{
    @Prop()
    id: string;

    @Prop()
    title: string;
}