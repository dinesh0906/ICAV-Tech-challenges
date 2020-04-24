import { Document } from 'mongoose';

export interface Booking extends Document {
    readonly contactPerson: string;
    readonly contactNo: number;
    readonly appointmentDateAndTime: Date;    
    readonly areaInMeter: number;
    readonly discount: number;
    readonly coupon: boolean;
    readonly couponName: string;
    readonly couponCode: string;
    readonly userLog: object
}