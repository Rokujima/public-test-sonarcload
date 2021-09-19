import { Date, Document } from 'mongoose';

export interface ITask extends Document {
  _id?: string;
  user_id: string;
  title: string;
  description: string;
  date: Date;
}
