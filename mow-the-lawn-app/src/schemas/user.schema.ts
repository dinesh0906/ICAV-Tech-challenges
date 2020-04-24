import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    coupon: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})