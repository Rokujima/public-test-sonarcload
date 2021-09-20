import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  @Type(() => Date)
  readonly date: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly user_id: string;
}
