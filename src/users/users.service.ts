import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { log } from 'console';
import { retry } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User> ){
    }

  async create(createUserDto: CreateUserDto) {
    const create = new this.userModel(createUserDto);
    try {
      const state = await create.save()
      return {
        success: true,
        state: state? 'success': 'error'
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        state: 'error'
      };
    }
  }

  async findAll() {
    try {
      const usersBd = await this.userModel.find();
      if(usersBd.length === 0){
        return {
          success: true,
          data: usersBd,
        }
      }
      return{
        success: false,
        message: "No users exist in the context"
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      }
    }
  }

  async findById(id: string) {
    try {
      const userBd = await this.userModel.findById(id);
      if(userBd){
        return {
          success: true,
          data: userBd,
        }
      }
      return{
        success: false,
        message: "User doesn't exist"
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      }
    }
  }

  async findByEmail(email: string){
    try {
      const userBd = await this.userModel.findOne({email})
      if(userBd){
        return {
          success: true,
          data: userBd,
        }
      }
      return{
        success: false,
        message: "User doesn't exist"
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      }
    }
  }

  async findByUser(user: string){
    try {
      const userBd = await this.userModel.findOne({user})
      if(userBd){
        return {
          success: true,
          data: userBd,
        }
      }else{
        return{
          success: false,
          message: "User doesn't exist"
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      }
    }
  }

  async checkActive(id: string){
    const userBd = await this.findById(id);
    try {
      if(userBd){
        return {
          success: true,
          data: userBd.data?.isActive,
        }
      }
      return {
        success: false,
        message: "User doesn't exist"
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
