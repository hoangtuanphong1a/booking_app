import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;
}