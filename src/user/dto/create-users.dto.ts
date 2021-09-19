import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  readonly username: string;
  @ApiProperty()
  @IsEmail()
  readonly email: string;
}
