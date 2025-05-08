// src/roboterstopic/roboterstopic.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { Topic } from '../topic/topic.entity';

@Entity()
export class RoboterStopic {
  @PrimaryGeneratedColumn()
  roboterstopicID: number;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @ManyToOne(() => Topic)
  @JoinColumn()
  topic: Topic;
}
