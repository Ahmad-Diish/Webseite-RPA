// src/roboter/roboter.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Entwickler } from '../entwickler/entwickler.entity';
import { Live } from '../live/live.entity';

@Entity()
export class Roboter {
  @PrimaryGeneratedColumn()
  roboterID: number;

  @ManyToOne(() => Entwickler)
  @JoinColumn()
  entwickler: Entwickler;

  @Column({ nullable: true })
  roboterName: string;

  @Column({ nullable: true, type: 'longtext' })
  roboterDescription: string;

  @Column()
  roboterFotoID: number;

  @Column({ nullable: true })
  roboterStart: Date;

  @Column()
  roboterEnd: Date;

  @Column({ nullable: true })
  roboterResponsible: string;

  @ManyToOne(() => Live)
  @JoinColumn()
  ParamaterID: Live;
}
