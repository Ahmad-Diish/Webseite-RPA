// src/topic/topic.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private topicRepository: Repository<Topic>,
  ) {}

  async findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  async findOne(id: number): Promise<Topic> {
    return this.topicRepository.findOne(id);
  }

  async create(topic: Topic): Promise<Topic> {
    return this.topicRepository.save(topic);
  }

  async update(id: number, topic: Partial<Topic>): Promise<Topic> {
    await this.topicRepository.update(id, topic);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.topicRepository.delete(id);
  }
}
