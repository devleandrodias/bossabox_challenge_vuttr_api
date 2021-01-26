import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsArray, IsString, IsOptional } from 'class-validator';

export class UpadteToolDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  title: string;

  @IsUrl()
  @IsString()
  @IsOptional()
  @ApiProperty()
  link: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  tags: string[];
}
