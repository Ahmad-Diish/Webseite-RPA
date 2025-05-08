// src/roboter-stopic/roboter-stopic.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoboterStopic } from './roboter-stopic.entity';

@Injectable()
export class RoboterStopicService {
  constructor(
    @InjectRepository(RoboterStopic)
    private roboterStopicRepository: Repository<RoboterStopic>,
  ) {}

  async findAll(): Promise<RoboterStopic[]> {
    return this.roboterStopicRepository.find();
  }

  async findOne(id: number): Promise<RoboterStopic> {
    return this.roboterStopicRepository.findOne(id);
  }

  async create(roboterStopic: RoboterStopic): Promise<RoboterStopic> {
    return this.roboterStopicRepository.save(roboterStopic);
  }

  async update(id: number, roboterStopic: Partial<RoboterStopic>): Promise<RoboterStopic> {
    await this.roboterStopicRepository.update(id, roboterStopic);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roboterStopicRepository.delete(id);
  }
}
