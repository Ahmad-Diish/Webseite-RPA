// src/reviews/review.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { User } from '../user/user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  ReviewId: number;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  ReviewDate: Date;

  @Column()
  Rating: number;

  @Column({ nullable: true, type: 'longtext' })
  Comment: string;
}

