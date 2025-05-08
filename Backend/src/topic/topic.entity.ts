// src/topic/topic.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  topicID: number;

  @Column()
  TopicName: string;
}
