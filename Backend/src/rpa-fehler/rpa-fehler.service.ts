// src/rpa-fehler/rpa-fehler.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpaFehler } from './rpa-fehler.entity';

@Injectable()
export class RpaFehlerService {
  constructor(
    @InjectRepository(RpaFehler)
    private rpaFehlerRepository: Repository<RpaFehler>,
  ) {}

  async findAll(): Promise<RpaFehler[]> {
    return this.rpaFehlerRepository.find();
  }

  async findOne(id: number): Promise<RpaFehler> {
    return this.rpaFehlerRepository.findOne(id);
  }

  async create(rpaFehler: RpaFehler): Promise<RpaFehler> {
    return this.rpaFehlerRepository.save(rpaFehler);
  }

  async update(id: number, rpaFehler: Partial<RpaFehler>): Promise<RpaFehler> {
    await this.rpaFehlerRepository.update(id, rpaFehler);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rpaFehlerRepository.delete(id);
  }
}
