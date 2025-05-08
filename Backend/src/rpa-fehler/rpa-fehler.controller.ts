// src/rpa-fehler/rpa-fehler.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RpaFehlerService } from './rpa-fehler.service';
import { RpaFehler } from './rpa-fehler.entity';

@Controller('rpa-fehler')
export class RpaFehlerController {
  constructor(private readonly rpaFehlerService: RpaFehlerService) {}

  @Get()
  async findAll(): Promise<RpaFehler[]> {
    return this.rpaFehlerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RpaFehler> {
    return this.rpaFehlerService.findOne(id);
  }

  @Post()
  async create(@Body() rpaFehler: RpaFehler): Promise<RpaFehler> {
    return this.rpaFehlerService.create(rpaFehler);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() rpaFehler: Partial<RpaFehler>): Promise<RpaFehler> {
    return this.rpaFehlerService.update(id, rpaFehler);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rpaFehlerService.remove(id);
  }
}
