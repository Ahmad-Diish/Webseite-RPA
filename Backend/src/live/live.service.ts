// src/live/live.service.ts
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Live } from './live.entity';

@Injectable()
export class LiveService {
  constructor(
    @InjectRepository(Live)
    private liveRepository: Repository<Live>,
  ) {}

  async findAll(): Promise<Live[]> {
    return this.liveRepository.find();
  }

  async findOne(id: number): Promise<Live> {
    const live = await this.liveRepository.findOne({
      where: { liveID: id }, // Replace 'liveID' with the actual primary column name
    });
    if (!live) {
      throw new NotFoundException(`Live with ID ${id} not found`);
    }
    return live;
  }

  async create(live: Live): Promise<Live> {
    return this.liveRepository.save(live);
  }

  async update(id: number, live: Partial<Live>): Promise<Live> {
    await this.liveRepository.update(id, live);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.liveRepository.delete(id);
  }
}
