// src/topic/topic.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';
import { NotFoundException } from '@nestjs/common';

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
    const topic = await this.topicRepository.findOne({
      where: { topicID: id }, // Replace 'topicID' with the actual primary column name
    });
    if (!topic) {
      throw new NotFoundException(`Topic with ID ${id} not found`);
    }
    return topic;
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
