// src/rpa-aufgaben-logs/rpa-aufgaben-logs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs.entity';

@Injectable()
export class RpaAufgabenLogsService {
  constructor(
    @InjectRepository(RpaAufgabenLogs)
    private rpaAufgabenLogsRepository: Repository<RpaAufgabenLogs>,
  ) {}

  async findAll(): Promise<RpaAufgabenLogs[]> {
    return this.rpaAufgabenLogsRepository.find();
  }

  async findOne(id: number): Promise<RpaAufgabenLogs> {
    return this.rpaAufgabenLogsRepository.findOne(id);
  }

  async create(rpaAufgabenLogs: RpaAufgabenLogs): Promise<RpaAufgabenLogs> {
    return this.rpaAufgabenLogsRepository.save(rpaAufgabenLogs);
  }

  async update(id: number, rpaAufgabenLogs: Partial<RpaAufgabenLogs>): Promise<RpaAufgabenLogs> {
    await this.rpaAufgabenLogsRepository.update(id, rpaAufgabenLogs);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rpaAufgabenLogsRepository.delete(id);
  }
}
