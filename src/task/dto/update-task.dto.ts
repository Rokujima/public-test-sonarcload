import { ApiProperty } from '@nestjs/swagger';

export class updateTaskDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
}
