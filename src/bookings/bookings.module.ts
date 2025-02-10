import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking, BookingSchema } from './schemas/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]), // Đăng ký Model Booking
  ],
  providers: [BookingsService],
  controllers: [BookingsController],
  exports: [BookingsService], // Export để các module khác có thể sử dụng
})
export class BookingsModule {}
