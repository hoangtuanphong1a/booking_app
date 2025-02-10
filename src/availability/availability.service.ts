import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from '../bookings/schemas/booking.schema';
import { Venue } from '../venues/schemas/venue.schema';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Venue.name) private venueModel: Model<Venue>,
  ) {}

  async checkAvailability(date: string, time: string) {
    const bookings = await this.bookingModel
      .find({
        date: new Date(date),
        time: time,
        status: 'confirmed',
      })
      .exec();

    const venues = await this.venueModel.find({ isAvailable: true }).exec();

    const availableVenues = venues.filter(
      (venue) =>
        !bookings.some(
          (booking) => booking.venueId.toString() === venue.id.toString(),
        ),
    );

    return {
      available: availableVenues.length > 0,
      availableVenues: availableVenues.map((venue) => ({
        id: venue.id,
        name: venue.name,
        capacity: venue.capacity,
      })),
    };
  }
}
