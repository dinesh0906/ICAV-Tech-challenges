import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body } from '@nestjs/common';
import { Header  } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDTO } from '../dto/register-user.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    @Header('Cache-Control', 'none')
    async registerUser(@Res() res, @Body() registerUserDTO: RegisterUserDTO) {        
        const newUser = await this.userService.registerUser(registerUserDTO);        
        return res.status(HttpStatus.OK).json({
            message: "You were registered successfully!",
            user: newUser
        })
    }
}
