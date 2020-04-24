import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { UserBookingDTO } from '../dto/user-booking.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) { }

    @Post('/appointment')    
    async booking(@Res() res, @Body() userBookingDTO: UserBookingDTO) {        
        const newBooking = await this.bookingService.booking(userBookingDTO);        
        return res.status(HttpStatus.OK).json({
            message: "Your booking successfully registered.",
            user: newBooking
        })
    }
}
