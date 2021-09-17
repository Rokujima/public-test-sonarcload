import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    return await new this.userModel({
      ...createUserDto,
      createdAt: Date.now(),
    }).save();
  }

  async find(): Promise<IUser[]> {
    return await this.userModel.find({});
  }

  async update(id: string, params: UpdateUserDto): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(id, params, { new: true });
  }

  async delete(id: string): Promise<IUser> {
    return this.userModel.findByIdAndRemove(id);
  }
}
