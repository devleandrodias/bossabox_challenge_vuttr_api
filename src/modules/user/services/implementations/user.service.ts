import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';
import { UserRepository } from '../../repositories/implementations/user.respository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this._userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User> {
    return this._userRepository.getUserById(id);
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this._userRepository.createUser(user);
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<UpdateResult> {
    return this._userRepository.updateUser(id, user);
  }

  async removeUser(id: string): Promise<DeleteResult> {
    return this._userRepository.removeUser(id);
  }
}
