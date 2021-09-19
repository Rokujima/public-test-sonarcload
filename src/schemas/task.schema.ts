import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type TaskDocument = Task & mongoose.Document;

@Schema()
export class Task {
  @Prop()
  id: string;
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop({ type: Date, required: true })
  date: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
