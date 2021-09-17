import { Type } from 'class-transformer';

export class createTaskDto {
  readonly title: string;
  @Type(() => Date)
  readonly date: string;
  readonly description: string;
  readonly user_id: string;
}
