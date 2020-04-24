import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { RegisterUserDTO } from '../dto/register-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async registerUser(registerUserDTO: RegisterUserDTO): Promise<User> {        
        const newUser = await this.userModel(registerUserDTO);
        return newUser.save();
    }
}
