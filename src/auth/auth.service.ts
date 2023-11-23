import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/log-out.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import PasswordValidator from 'password-validator';
import { generateHash } from 'src/auth/utils/Encrypt';
import { validPassword } from './utils/Password';
import { log } from 'console';

@Injectable()
export class AuthService {

  constructor(
    private readonly userservice: UsersService
  ){}

  async register(registerDto: RegisterDto) {
    const user = await this.userservice.findByEmail(registerDto.email)
    
    if(!user.success){
      const pass = registerDto.password
      const valid = validPassword(pass)

      if(valid?.length === 0){
        registerDto.password = generateHash(pass)
        return await this.userservice.create({...registerDto, isActive:false})
      }else{
        return {
          success: false,
          state: 'error',
          message: valid,
        }
      }
    }else{
      return {
        succes: false,
        message: "User already exists",
        state: 'error'
      }
    }
  }

  login(loginDto: LoginDto){
    return 'Login';
  }
}
