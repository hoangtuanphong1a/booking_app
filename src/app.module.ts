import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { VenuesModule } from './venues/venues.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/coworking-space'),
    UsersModule,
    AuthModule,
    BookingsModule,
    VenuesModule,
  ],
})
export class AppModule {}
