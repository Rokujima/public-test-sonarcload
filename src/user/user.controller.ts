import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
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
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    try {
      return await this.service.create(createUserDto);
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
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
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  async update(
    @Query('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    try {
      return await this.service.update(id, updateUserDto);
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'delete users' })
  async delete(@Param('id') id: string): Promise<IUser> {
    try {
      return await this.service.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
