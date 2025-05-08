// src/roboter/roboter.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoboterService } from './roboter.service';
import { Roboter } from './roboter.entity';

@Controller('roboters')
export class RoboterController {
  constructor(private readonly roboterService: RoboterService) {}

  @Get()
  async findAll(): Promise<Roboter[]> {
    return this.roboterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Roboter> {
    return this.roboterService.findOne(id);
  }

  @Post()
  async create(@Body() roboter: Roboter): Promise<Roboter> {
    return this.roboterService.create(roboter);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() roboter: Partial<Roboter>): Promise<Roboter> {
    return this.roboterService.update(id, roboter);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.roboterService.remove(id);
  }
}
