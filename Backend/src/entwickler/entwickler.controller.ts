// src/entwickler/entwickler.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EntwicklerService } from './entwickler.service';
import { Entwickler } from './entwickler.entity';

@Controller('entwickler')
export class EntwicklerController {
  constructor(private readonly entwicklerService: EntwicklerService) {}

  @Get()
  async findAll(): Promise<Entwickler[]> {
    return this.entwicklerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Entwickler> {
    return this.entwicklerService.findOne(id);
  }

  @Post()
  async create(@Body() entwickler: Entwickler): Promise<Entwickler> {
    return this.entwicklerService.create(entwickler);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() entwickler: Partial<Entwickler>,
  ): Promise<Entwickler> {
    return this.entwicklerService.update(id, entwickler);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.entwicklerService.remove(id);
  }
}
