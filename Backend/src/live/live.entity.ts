// src/live/live.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  liveID: number; 

  @Column()
  Status: string;
}
