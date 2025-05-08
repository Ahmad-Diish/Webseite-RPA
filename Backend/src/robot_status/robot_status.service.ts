// src/robot-status/robot-status.service.ts
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RobotStatus } from './robot_status.entity';

@Injectable()
export class RobotStatusService {
  constructor(
    @InjectRepository(RobotStatus)
    private robotStatusRepository: Repository<RobotStatus>,
  ) {}

  async findAll(): Promise<RobotStatus[]> {
    return this.robotStatusRepository.find();
  }

  async findOne(id: number): Promise<RobotStatus> {
    const status = await this.robotStatusRepository.findOne({
      where: { robotStatusID: id }, // Replace with your actual primary key name
    });
    if (!status) {
      throw new NotFoundException(`RobotStatus with ID ${id} not found`);
    }
    return status;
  }

  async create(robotStatus: RobotStatus): Promise<RobotStatus> {
    return this.robotStatusRepository.save(robotStatus);
  }

  async update(id: number, robotStatus: Partial<RobotStatus>): Promise<RobotStatus> {
    await this.robotStatusRepository.update(id, robotStatus);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.robotStatusRepository.delete(id);
  }
}

