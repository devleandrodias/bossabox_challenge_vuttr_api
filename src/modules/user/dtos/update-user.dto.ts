import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(60)
  email: string;
}
