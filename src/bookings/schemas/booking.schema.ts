import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  venueId: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ default: 'pending' }) // trạng thái đặt chỗ
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
