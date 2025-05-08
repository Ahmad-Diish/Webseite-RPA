// src/roboteraufgaben/roboteraufgaben.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { RpaAufgabe } from '../rpa-aufgaben/rpa-aufgaben.entity';

@Entity()
export class RoboterAufgabe {
  @PrimaryGeneratedColumn()
  roboterAufgabeID: number;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @ManyToOne(() => RpaAufgabe)
  @JoinColumn()
  aufgabe: RpaAufgabe;
}

