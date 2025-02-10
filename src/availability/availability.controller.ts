import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('availability')
@UseGuards(JwtAuthGuard)
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  async checkAvailability(
    @Query('date') date: string,
    @Query('time') time: string
  ) {
    return this.availabilityService.checkAvailability(date, time);
  }
}