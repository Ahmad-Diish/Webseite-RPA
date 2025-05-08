// src/review/review.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './review.entity';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Review> {
    return this.reviewService.findOne(id);
  }

  @Post()
  async create(@Body() review: Review): Promise<Review> {
    return this.reviewService.create(review);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() review: Partial<Review>): Promise<Review> {
    return this.reviewService.update(id, review);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.reviewService.remove(id);
  }
}

