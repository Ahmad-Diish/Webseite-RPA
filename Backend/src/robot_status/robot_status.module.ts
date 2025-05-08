// src/robot-status/robot-status.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotStatusService } from './robot_status.service';
import { RobotStatusController } from './robot_status.controller';
import { RobotStatus } from './robot_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RobotStatus])],
  controllers: [RobotStatusController],
  providers: [RobotStatusService],
})
export class RobotStatusModule {}


