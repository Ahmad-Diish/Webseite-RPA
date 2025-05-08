// src/roboter-stopic/roboter-stopic.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { RoboterStopic } from './roboterstopic.entity';

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
    const roboterStopic = await this.roboterStopicRepository.findOne({
      where: { roboterstopicID: id }, // Replace 'roboterStopicID' with your actual primary key column name
    });
    if (!roboterStopic) {
      throw new NotFoundException(`RoboterStopic with ID ${id} not found`);
    }
    return roboterStopic;
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
