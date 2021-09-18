import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: 'create users' })
  create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    const userCreate = this.service.create(createUserDto);
    if (!userCreate) {
      throw new HttpException(
        {
          message: userCreate,
          data: null,
          errors: userCreate,
        },
        500,
      );
    }
    return userCreate;
  }
  @Get()
  @ApiOperation({ summary: 'list users' })
  find(): Promise<IUser[]> {
    return this.service.find();
  }
  @Put()
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateUserDto })
  @ApiOperation({ summary: 'update users' })
  update(
    @Query('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    return this.service.update(id, updateUserDto);
  }
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'delete users' })
  delete(@Param('id') id: string): Promise<IUser> {
    return this.service.delete(id);
  }
}
