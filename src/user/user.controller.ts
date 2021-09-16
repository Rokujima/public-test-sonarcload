import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.service.create(createUserDto);
  }
}
