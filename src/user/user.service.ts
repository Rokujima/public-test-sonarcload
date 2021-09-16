import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await new this.userModel({
      ...createUserDto,
      createdAt: Date.now(),
    }).save();
  }

  async find(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async update(id: string, params: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, params, { new: true });
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
