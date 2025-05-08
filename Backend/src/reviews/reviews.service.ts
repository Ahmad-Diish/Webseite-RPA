// src/review/review.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Review } from './reviews.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  async findOne(id: number): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: { ReviewId: id }, // Correct usage
    });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }
  

  async create(review: Review): Promise<Review> {
    return this.reviewRepository.save(review);
  }

  async update(id: number, review: Partial<Review>): Promise<Review> {
    await this.reviewRepository.update(id, review);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}

