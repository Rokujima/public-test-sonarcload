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
import { Task } from 'src/schemas/task.schema';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'find task' })
  async find(@Query('id') id: string): Promise<Task> {
    try {
      return await this.taskService.find(id);
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Get('list')
  @ApiOperation({ summary: 'list task' })
  async findAll(): Promise<Task[]> {
    try {
      return await this.taskService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Post()
  @ApiBody({ type: createTaskDto })
  @ApiOperation({ summary: 'create task' })
  async create(@Body() CreateTaskDto: createTaskDto): Promise<Task> {
    try {
      return await this.taskService.create(CreateTaskDto);
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Put(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: updateTaskDto })
  @ApiOperation({ summary: 'update task' })
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  async update(@Param('id') id: string, params: updateTaskDto): Promise<Task> {
    try {
      return await this.taskService.update(id, params);
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
  @ApiOperation({ summary: 'delete task' })
  async delete(@Param('id') id: string): Promise<Task> {
    try {
      return await this.taskService.delete(id);
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
