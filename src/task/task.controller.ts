import {
  Body,
  Controller,
  Delete,
  Get,
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
  find(@Query('id') id: string): Promise<Task> {
    return this.taskService.find(id);
  }
  @Get('list')
  @ApiOperation({ summary: 'list task' })
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Post()
  @ApiBody({ type: createTaskDto })
  @ApiOperation({ summary: 'create task' })
  create(@Body() CreateTaskDto: createTaskDto): Promise<Task> {
    return this.taskService.create(CreateTaskDto);
  }
  @Put(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: updateTaskDto })
  @ApiOperation({ summary: 'update task' })
  update(@Param('id') id: string, params: updateTaskDto): Promise<Task> {
    return this.taskService.update(id, params);
  }
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'delete task' })
  delete(@Param('id') id: string): Promise<Task> {
    return this.taskService.delete(id);
  }
}
