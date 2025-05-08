// src/roboter-stopic/roboter-stopic.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoboterStopicService } from './roboter-stopic.service';
import { RoboterStopic } from './roboter-stopic.entity';

@Controller('roboter-stopics')
export class RoboterStopicController {
  constructor(private readonly roboterStopicService: RoboterStopicService) {}

  @Get()
  async findAll(): Promise<RoboterStopic[]> {
    return this.roboterStopicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RoboterStopic> {
    return this.roboterStopicService.findOne(id);
  }

  @Post()
  async create(@Body() roboterStopic: RoboterStopic): Promise<RoboterStopic> {
    return this.roboterStopicService.create(roboterStopic);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() roboterStopic: Partial<RoboterStopic>): Promise<RoboterStopic> {
    return this.roboterStopicService.update(id, roboterStopic);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.roboterStopicService.remove(id);
  }
}
