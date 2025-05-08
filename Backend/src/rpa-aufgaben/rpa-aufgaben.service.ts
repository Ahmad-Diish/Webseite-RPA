// src/rpa-aufgabe/rpa-aufgabe.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpaAufgabe } from './rpa-aufgabe.entity';

@Injectable()
export class RpaAufgabeService {
  constructor(
    @InjectRepository(RpaAufgabe)
    private rpaAufgabeRepository: Repository<RpaAufgabe>,
  ) {}

  async findAll(): Promise<RpaAufgabe[]> {
    return this.rpaAufgabeRepository.find();
  }

  async findOne(id: number): Promise<RpaAufgabe> {
    return this.rpaAufgabeRepository.findOne(id);
  }

  async create(rpaAufgabe: RpaAufgabe): Promise<RpaAufgabe> {
    return this.rpaAufgabeRepository.save(rpaAufgabe);
  }

  async update(id: number, rpaAufgabe: Partial<RpaAufgabe>): Promise<RpaAufgabe> {
    await this.rpaAufgabeRepository.update(id, rpaAufgabe);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rpaAufgabeRepository.delete(id);
  }
}
