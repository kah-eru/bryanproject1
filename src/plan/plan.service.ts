import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Loaded } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mysql';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlanService {
  constructor(private readonly em: EntityManager,
    ){}

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = new Plan(createPlanDto);
    await this.em.persistAndFlush(plan)
    return plan
  }

  findAll() {
    return this.em.find(Plan, {});
  }

  findOne(id: number) {
    return this.em.find(Plan, id);
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
