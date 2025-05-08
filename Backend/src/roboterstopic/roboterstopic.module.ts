// src/roboter-stopic/roboter-stopic.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboterStopicService } from './roboter-stopic.service';
import { RoboterStopicController } from './roboter-stopic.controller';
import { RoboterStopic } from './roboter-stopic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoboterStopic])],
  controllers: [RoboterStopicController],
  providers: [RoboterStopicService],
})
export class RoboterStopicModule {}
