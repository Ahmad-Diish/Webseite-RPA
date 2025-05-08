// src/roboter-aufgabe/roboter-aufgabe.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoboterAufgabeService } from './roboteraufgaben.service';
import { RoboterAufgabe } from './roboteraufgaben.entity';

@Controller('roboter-aufgaben')
export class RoboterAufgabeController {
  constructor(private readonly roboterAufgabeService: RoboterAufgabeService) {}

  @Get()
  async findAll(): Promise<RoboterAufgabe[]> {
    return this.roboterAufgabeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RoboterAufgabe> {
    return this.roboterAufgabeService.findOne(id);
  }

  @Post()
  async create(@Body() roboterAufgabe: RoboterAufgabe): Promise<RoboterAufgabe> {
    return this.roboterAufgabeService.create(roboterAufgabe);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() roboterAufgabe: Partial<RoboterAufgabe>): Promise<RoboterAufgabe> {
    return this.roboterAufgabeService.update(id, roboterAufgabe);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.roboterAufgabeService.remove(id);
  }
}

