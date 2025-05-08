// src/rpa-aufgabe/rpa-aufgabe.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RpaAufgabeService } from './rpa-aufgaben.service';
import { RpaAufgabe } from './rpa-aufgaben.entity';

@Controller('rpa-aufgaben')
export class RpaAufgabeController {
  constructor(private readonly rpaAufgabeService: RpaAufgabeService) {}

  @Get()
  async findAll(): Promise<RpaAufgabe[]> {
    return this.rpaAufgabeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RpaAufgabe> {
    return this.rpaAufgabeService.findOne(id);
  }

  @Post()
  async create(@Body() rpaAufgabe: RpaAufgabe): Promise<RpaAufgabe> {
    return this.rpaAufgabeService.create(rpaAufgabe);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() rpaAufgabe: Partial<RpaAufgabe>): Promise<RpaAufgabe> {
    return this.rpaAufgabeService.update(id, rpaAufgabe);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rpaAufgabeService.remove(id);
  }
}
