// src/review/review.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { Review } from './reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}

