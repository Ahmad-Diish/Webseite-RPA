// src/roboter-aufgabe/roboter-aufgabe.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoboterAufgabe } from './roboter-aufgabe.entity';

@Injectable()
export class RoboterAufgabeService {
  constructor(
    @InjectRepository(RoboterAufgabe)
    private roboterAufgabeRepository: Repository<RoboterAufgabe>,
  ) {}

  async findAll(): Promise<RoboterAufgabe[]> {
    return this.roboterAufgabeRepository.find();
  }

  async findOne(id: number): Promise<RoboterAufgabe> {
    return this.roboterAufgabeRepository.findOne(id);
  }

  async create(roboterAufgabe: RoboterAufgabe): Promise<RoboterAufgabe> {
    return this.roboterAufgabeRepository.save(roboterAufgabe);
  }

  async update(id: number, roboterAufgabe: Partial<RoboterAufgabe>): Promise<RoboterAufgabe> {
    await this.roboterAufgabeRepository.update(id, roboterAufgabe);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roboterAufgabeRepository.delete(id);
  }
}

