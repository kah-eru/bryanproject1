import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { CreatePlanDto } from "../dto/create-plan.dto";
import { Calendar } from "../../calendar/entities/calendar.entity";

@Entity()
export class Plan {
    constructor(createPlanDto: CreatePlanDto){
        this.appointment = createPlanDto.appointment
        this.school = createPlanDto.school
        this.freetime = createPlanDto.freetime
        this.sleep = createPlanDto.sleep
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property()
    appointment!: boolean

    @Property()
    school!: boolean

    @Property()
    freetime!: boolean

    @Property()
    sleep!: boolean

    @ManyToOne(type => Calendar, {nullable: true})
    calendar: Calendar;
}
