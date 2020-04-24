import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
    contactPerson: {
        type: String,
        required: true
    },    
    contactNo: {
        type: Number,
        required: true
    },
    appointmentDateAndTime: {
        type: Date,
        required: true
    },    
    areaInMeter: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        enum: [0, 15, 25],
        required: true
    },
    coupon: {
        type: Boolean,
        required: true
    },
    couponName: {
        type: String
    },
    couponCode: {
        type: String
    },
    userLog: [
         {
          userId: {
              type: String,              
          },
          updatedAt: {
              type: Date
          }
        }
    ]    
})