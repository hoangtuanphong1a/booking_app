import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateBookingDto {
  @IsNotEmpty()
  venueId: Types.ObjectId;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;
}