import { ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../services/implementations/user.service';

import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this._userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this._userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this._userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<UpdateResult> {
    return this._userService.updateUser(id, user);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<DeleteResult> {
    return this._userService.removeUser(id);
  }
}
