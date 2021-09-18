import { ApiProperty } from '@nestjs/swagger';

export class updateTaskDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}
