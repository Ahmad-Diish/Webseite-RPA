// src/topic/topic.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from './topic.entity';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  async findAll(): Promise<Topic[]> {
    return this.topicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Topic> {
    return this.topicService.findOne(id);
  }

  @Post()
  async create(@Body() topic: Topic): Promise<Topic> {
    return this.topicService.create(topic);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() topic: Partial<Topic>): Promise<Topic> {
    return this.topicService.update(id, topic);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.topicService.remove(id);
  }
}
