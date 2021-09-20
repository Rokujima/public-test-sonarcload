import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return new this.taskModel(createTaskDto).save();
  }
  async find(id: string): Promise<Task> {
    return await this.taskModel.findById(id);
  }
  async findAll(): Promise<Task[]> {
    return this.taskModel.find({});
  }
  async update(id: string, params: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, params, {
      new: true,
    });
  }
  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id);
  }
}
