import { Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateCalendarDto } from "../dto/create-calendar.dto";
import { Date } from "../../date/entities/date.entity"
import { User } from "../../user/entities/user.entity"
import { Plan } from "../../plan/entities/plan.entity"

@Entity()
export class Calendar {
    constructor(createCalendarDto: CreateCalendarDto){
        this.datecreated = createCalendarDto.datecreated
        this.description = createCalendarDto.description
        this.timecreated = createCalendarDto.timecreated
        this.calendarname = createCalendarDto.calendarname
    }
    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property({
        length: 8 //date in monthdayyear format example: 01012002 (01/01/2002) January 1, 2002
    })
    datecreated!: string
    
    @Property({
        length: 1024 //short description of that day's plan
    })
    description!: string

    @Property({
        length: 4 //in 0000 24 hour time example: 2030 (8:30 PM)
    })
    timecreated!: number

    @Property({
        length: 64
    })
    calendarname!: string

    @OneToMany(type => Date, Date => Date.calendar)
    date: Date[];

    @OneToMany(type => User, User => User.calendar)
    user: User[];

    @OneToMany(type => Plan, Plan => Plan.calendar)
    plan: Plan[];
}
