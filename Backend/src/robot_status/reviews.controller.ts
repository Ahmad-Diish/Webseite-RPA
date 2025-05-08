// src/robot-status/robot-status.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RobotStatusService } from './robot-status.service';
import { RobotStatus } from './robot-status.entity';

@Controller('robot-status')
export class RobotStatusController {
  constructor(private readonly robotStatusService: RobotStatusService) {}

  @Get()
  async findAll(): Promise<RobotStatus[]> {
    return this.robotStatusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RobotStatus> {
    return this.robotStatusService.findOne(id);
  }

  @Post()
  async create(@Body() robotStatus: RobotStatus): Promise<RobotStatus> {
    return this.robotStatusService.create(robotStatus);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() robotStatus: Partial<RobotStatus>): Promise<RobotStatus> {
    return this.robotStatusService.update(id, robotStatus);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.robotStatusService.remove(id);
  }
}

