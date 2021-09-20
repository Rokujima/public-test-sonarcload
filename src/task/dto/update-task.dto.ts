import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
}
