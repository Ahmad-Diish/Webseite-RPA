// src/rpa-aufgaben-logs/rpa-aufgaben-logs.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RpaAufgabenLogsService } from './rpa-aufgaben-logs.service';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs.entity';

@Controller('rpa-aufgaben-logs')
export class RpaAufgabenLogsController {
  constructor(private readonly rpaAufgabenLogsService: RpaAufgabenLogsService) {}

  @Get()
  async findAll(): Promise<RpaAufgabenLogs[]> {
    return this.rpaAufgabenLogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RpaAufgabenLogs> {
    return this.rpaAufgabenLogsService.findOne(id);
  }

  @Post()
  async create(@Body() rpaAufgabenLogs: RpaAufgabenLogs): Promise<RpaAufgabenLogs> {
    return this.rpaAufgabenLogsService.create(rpaAufgabenLogs);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() rpaAufgabenLogs: Partial<RpaAufgabenLogs>): Promise<RpaAufgabenLogs> {
    return this.rpaAufgabenLogsService.update(id, rpaAufgabenLogs);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rpaAufgabenLogsService.remove(id);
  }
}
