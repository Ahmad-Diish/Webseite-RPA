// src/roboter-stopic/roboter-stopic.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboterStopicService } from './roboterstopic.service';
import { RoboterStopicController } from './roboterstopic.controller';
import { RoboterStopic } from './roboterstopic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoboterStopic])],
  controllers: [RoboterStopicController],
  providers: [RoboterStopicService],
})
export class RoboterStopicModule {}
