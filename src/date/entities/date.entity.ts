import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateDateDto } from "../dto/create-date.dto";
import { Calendar } from "../../calendar/entities/calendar.entity";

@Entity()
export class Date {
    constructor(createDateDto: CreateDateDto){
        this.dayofweek = createDateDto.dayofweek
        this.day = createDateDto.day
        this.month = createDateDto.month
        this.year = createDateDto.year 
    }
    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property({
        length:9
    })
    dayofweek: string//monday, tuesday, wednesday etc...

    @Property({
        length:2
    })
    day: number // in xx form

    @Property({
        length:2
    })
    month: number // in xx form

    @Property({
        length:4
    })
    year: number // in xxxx form

    @ManyToOne(type => Calendar, {nullable: true})
    calendar: Calendar;

    
}


