import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CalendarModule } from './calendar/calendar.module';
import { UserModule } from './user/user.module';
import { DateModule } from './date/date.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [MikroOrmModule.forRoot(), CalendarModule, UserModule, DateModule, PlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
