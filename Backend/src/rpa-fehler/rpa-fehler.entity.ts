// src/rpa-fehler/rpa-fehler.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { RpaAufgabe } from '../rpa-aufgaben/rpa-aufgaben.entity';

@Entity()
export class RpaFehler {
  @PrimaryGeneratedColumn()
  rpaFehlerID: number;

  @Column()
  FehlerNachricht: string;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @ManyToOne(() => RpaAufgabe)
  @JoinColumn()
  aufgabe: RpaAufgabe;

  @Column()
  FehlerZeitpunkt: Date;
}
