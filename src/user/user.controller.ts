import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.service.create(createUserDto);
  }
  @Get()
  find(): Promise<IUser[]> {
    return this.service.find();
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    return this.service.update(id, updateUserDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IUser> {
    return this.service.delete(id);
  }
}
