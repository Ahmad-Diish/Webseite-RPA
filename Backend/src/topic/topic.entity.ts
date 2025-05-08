// src/topic/topic.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  TobicId: number;

  @Column()
  TopicName: string;
}
