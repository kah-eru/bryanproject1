import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Loaded } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mysql';
import { Calendar } from './entities/calendar.entity';

@Injectable()
export class CalendarService {

  constructor(private readonly em: EntityManager,
    ){}

  async create(createCalendarDto: CreateCalendarDto): Promise<Calendar> {
    const calendar = new Calendar(createCalendarDto);
    await this.em.persistAndFlush(calendar)
    return calendar
  }

  findAll(): Promise<Loaded<Calendar[]>> {
    return this.em.find(Calendar, {});
  }

  findOne(id: number) {
    return this.em.findOne(Calendar, id);
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendar`;
  }
}
