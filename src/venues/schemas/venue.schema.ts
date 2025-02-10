import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Venue extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  capacity: number;

  @Prop({ default: true })
  isAvailable: boolean;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
