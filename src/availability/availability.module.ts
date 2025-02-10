import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AvailabilityController } from './availability.controller';
import { AvailabilityService } from './availability.service';
import { Booking, BookingSchema } from '../bookings/schemas/booking.schema';
import { Venue, VenueSchema } from '../venues/schemas/venue.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Venue.name, schema: VenueSchema }
    ])
  ],
  controllers: [AvailabilityController],
  providers: [AvailabilityService]
})
export class AvailabilityModule {}