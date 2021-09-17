import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from 'src/schemas/task.schema';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get(':id')
  find(@Param() id: string): Promise<Task> {
    return this.taskService.find(id);
  }
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Post()
  create(@Body() CreateTaskDto: createTaskDto): Promise<Task> {
    return this.taskService.create(CreateTaskDto);
  }
  @Put(':id')
  update(@Param() id: string, params: updateTaskDto): Promise<Task> {
    return this.taskService.update(id, params);
  }
  @Delete(':id')
  delete(@Param() id: string): Promise<Task> {
    return this.taskService.delete(id);
  }
}
