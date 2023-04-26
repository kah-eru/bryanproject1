import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Loaded } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mysql';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager,
    ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto);
    await this.em.persistAndFlush(user)
    return user
  }

  findAll() {
    return this.em.find(User, {});
  }

  findOne(id: number) {
    return this.em.findOne(User, id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
