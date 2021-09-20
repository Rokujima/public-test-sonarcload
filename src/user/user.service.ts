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
    const userCreate = await new this.userModel({
      ...createUserDto,
      createdAt: Date.now(),
    }).save();
    return userCreate;
  }

  async find(): Promise<IUser[]> {
    const userFindAll = await this.userModel.find({});
    return userFindAll;
  }

  async update(id: string, params: UpdateUserDto): Promise<IUser> {
    const userUpdateOne = await this.userModel.findByIdAndUpdate(id, params, {
      new: true,
    });
    return userUpdateOne;
  }

  async delete(id: string): Promise<IUser> {
    const userDelete = await this.userModel.findByIdAndRemove(id);
    return userDelete;
  }
}
