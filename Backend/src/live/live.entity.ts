// src/live/live.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  LiveID: number;

  @Column()
  Status: string;
}
