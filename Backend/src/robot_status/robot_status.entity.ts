// src/robot_status/robot_status.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';

@Entity()
export class RobotStatus {
  @PrimaryGeneratedColumn()
  StatusID: number;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @Column()
  StatusMessage: string;

  @Column({ nullable: true })
  PositionX: number;

  @Column({ nullable: true })
  PositionY: number;

  @Column({ nullable: true })
  BatteryLevel: number;

  @Column()
  Timestamp: Date;
}


