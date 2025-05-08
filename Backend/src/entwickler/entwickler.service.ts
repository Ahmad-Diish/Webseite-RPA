// src/entwickler/entwickler.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entwickler } from './entwickler.entity';

@Injectable()
export class EntwicklerService {
  constructor(
    @InjectRepository(Entwickler)
    private entwicklerRepository: Repository<Entwickler>,
  ) {}

  async findAll(): Promise<Entwickler[]> {
    return this.entwicklerRepository.find();
  }

  async findOne(id: number): Promise<Entwickler> {
    return this.entwicklerRepository.findOne(id);
  }

  async create(entwickler: Entwickler): Promise<Entwickler> {
    return this.entwicklerRepository.save(entwickler);
  }

  async update(id: number, entwickler: Partial<Entwickler>): Promise<Entwickler> {
    await this.entwicklerRepository.update(id, entwickler);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.entwicklerRepository.delete(id);
  }
}
