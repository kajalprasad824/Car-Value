import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Users } from './users/users.entity';
import { Reports } from './reports/reports.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Users, Reports],
    synchronize: true,
  }),
  UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
