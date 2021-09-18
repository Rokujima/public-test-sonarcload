import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}
