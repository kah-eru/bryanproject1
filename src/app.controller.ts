import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hey/:firstname/:lastname')
  getHey(@Param('firstname') firstName: string, @Param('lastname') lastName: string): string {
    return this.appService.getHey(firstName, lastName);
  }

  @Get("/queryHi")
  queryHi(@Query('firstname') firstName : string, @Query('lastname') lastName : string): string{
    return this.appService.getHey(firstName, lastName)
  }

  @Post()
  addNewEvent(@Body() body: any): string {
    const { firstName, lastName } = body
    return this.appService.getHey(firstName, lastName)
  }
}
