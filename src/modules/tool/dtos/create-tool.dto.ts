import { ApiProperty } from '@nestjs/swagger';
import {
  IsUrl,
  IsArray,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateToolDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsUrl()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  link: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  tags: string[];
}
