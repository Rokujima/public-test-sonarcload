import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class createTaskDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  @Type(() => Date)
  date: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  user_id: string;
}
