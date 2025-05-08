// src/rpa-aufgaben-logs/rpa-aufgaben-logs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs.entity';
import { NotFoundException } from '@nestjs/common';

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
    const rpaAufgabenLog = await this.rpaAufgabenLogsRepository.findOne({
      where: { rpaAufgabenLogID: id }, // Use the correct primary column name here
    });
    if (!rpaAufgabenLog) {
      throw new NotFoundException(`RpaAufgabenLogs with ID ${id} not found`);
    }
    return rpaAufgabenLog;
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
