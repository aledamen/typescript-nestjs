import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ default: 999 })
  price: number;

  @Prop()
  description: string;
}

export const Itemschema = SchemaFactory.createForClass(Items);
