import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from '../interfaces/booking.interface';
import { UserBookingDTO } from '../dto/user-booking.dto';

@Injectable()
export class BookingService {
    constructor(@InjectModel('Booking') private readonly bookingModel: Model<Booking>) { }

    async booking(userBookingDTO: UserBookingDTO): Promise<Booking> {
        const newBooking = await this.bookingModel(userBookingDTO);
        return newBooking.save();
    }
}
