// src/rpa-aufgaben-logs/rpa-aufgaben-logs.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { RpaAufgabe } from '../rpa-aufgaben/rpa-aufgaben.entity';

@Entity()
export class RpaAufgabenLogs {
  @PrimaryGeneratedColumn()
   rpaAufgabenLogID: number;

  @ManyToOne(() => RpaAufgabe)
  @JoinColumn()
  aufgabe: RpaAufgabe;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @Column()
  LogMessage: string;

  @Column()
  Timestamp: Date;
}
