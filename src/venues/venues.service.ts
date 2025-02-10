import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from './schemas/venue.schema';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<Venue>) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    const createdVenue = new this.venueModel(createVenueDto);
    return createdVenue.save();
  }

  async findAll(): Promise<Venue[]> {
    return this.venueModel.find({ isAvailable: true }).exec();
  }

  async update(id: string, updateVenueDto: any): Promise<Venue> {
    const venue = await this.venueModel.findByIdAndUpdate(id, updateVenueDto, { new: true }).exec();
    if (!venue) {
      throw new NotFoundException('Venue not found');
    }
    return venue;
  }

  async remove(id: string): Promise<Venue> {
    const venue = await this.venueModel.findByIdAndDelete(id).exec();
    if (!venue) {
      throw new NotFoundException('Venue not found');
    }
    return venue;
  }
}