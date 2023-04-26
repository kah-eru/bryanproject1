import { Injectable } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { Loaded } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mysql';
import { Date } from './entities/date.entity';
import { Plan } from 'src/plan/entities/plan.entity';

@Injectable()
export class DateService {

  constructor(private readonly em: EntityManager,
    ){}

  async create(createDateDto: CreateDateDto): Promise<Date> {
    const date = new Date(createDateDto);
    await this.em.persistAndFlush(date)
    return date
  }

  findAll() {
    return this.em.find(Plan, {});
  }

  findOne(id: number) {
    return this.em.find(Plan, id);
  }

  update(id: number, updateDateDto: UpdateDateDto) {
    return `This action updates a #${id} date`;
  }

  remove(id: number) {
    return `This action removes a #${id} date`;
  }
}
