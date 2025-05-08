// src/live/live.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LiveService } from './live.service';
import { Live } from './live.entity';

@Controller('lives')
export class LiveController {
  constructor(private readonly liveService: LiveService) {}

  @Get()
  async findAll(): Promise<Live[]> {
    return this.liveService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Live> {
    return this.liveService.findOne(id);
  }

  @Post()
  async create(@Body() live: Live): Promise<Live> {
    return this.liveService.create(live);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() live: Partial<Live>): Promise<Live> {
    return this.liveService.update(id, live);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.liveService.remove(id);
  }
}
