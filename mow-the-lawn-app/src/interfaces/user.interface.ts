import { Document } from 'mongoose';

export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly contactNo: number;
    readonly city: string;
    readonly coupon: boolean;
    readonly createdAt: Date
}