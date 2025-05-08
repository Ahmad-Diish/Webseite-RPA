// src/roboter/roboter.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roboter } from './roboter.entity';

@Injectable()
export class RoboterService {
  constructor(
    @InjectRepository(Roboter)
    private roboterRepository: Repository<Roboter>,
  ) {}

  async findAll(): Promise<Roboter[]> {
    return this.roboterRepository.find();
  }

  async findOne(id: number): Promise<Roboter> {
    return this.roboterRepository.findOne(id);
  }

  async create(roboter: Roboter): Promise<Roboter> {
    return this.roboterRepository.save(roboter);
  }

  async update(id: number, roboter: Partial<Roboter>): Promise<Roboter> {
    await this.roboterRepository.update(id, roboter);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roboterRepository.delete(id);
  }
}
