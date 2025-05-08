// src/roboter/roboter.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboterService } from './roboter.service';
import { RoboterController } from './roboter.controller';
import { Roboter } from './roboter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roboter])],
  controllers: [RoboterController],
  providers: [RoboterService],
})
export class RoboterModule {}
