import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateUserDto } from "../dto/create-user.dto";
import { Calendar } from "../../calendar/entities/calendar.entity";

@Entity()
export class User {
    constructor(createUserDto: CreateUserDto){
        this.name = createUserDto.name
        this.username = createUserDto.username
        this.password = createUserDto.password
    }
    
    @PrimaryKey({
        autoincrement: true
    })
    readonly id!: number

    @Property({
        length: 128
    })

    name!: string

    @Property({
        length: 16
    })

    username!: string

    @Property({
        length: 16
    })

    password!: string

    @ManyToOne(type => Calendar, {nullable: true})
    calendar: Calendar;
}
