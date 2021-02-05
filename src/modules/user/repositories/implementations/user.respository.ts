import {
  Repository,
  DeleteResult,
  UpdateResult,
  EntityRepository,
} from 'typeorm';

import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getAllUsers(): Promise<User[]> {
    return this.find();
  }

  async getUserById(id: string): Promise<User> {
    return this.findOne({ where: { id } });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.save(user);
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<UpdateResult> {
    return this.update(id, user);
  }

  async removeUser(id: string): Promise<DeleteResult> {
    return this.delete({ id });
  }
}
