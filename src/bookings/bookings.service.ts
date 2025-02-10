import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
  ) {}

  async createBooking(data: any): Promise<Booking> {
    return this.bookingModel.create(data);
  }

  async getBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }
}
