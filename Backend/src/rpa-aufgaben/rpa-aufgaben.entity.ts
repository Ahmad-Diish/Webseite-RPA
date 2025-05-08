// src/rpa-aufgaben/rpa-aufgaben.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class RpaAufgabe {
  @PrimaryGeneratedColumn()
  rpaAufgabeID: number;

  @Column()
  AufgabenName: string;

  @Column({ nullable: true, type: 'text' })
  AufgabenBeschreibung: string;

  @Column()
  Erstellungszeit: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  Ersteller: User;

  @Column()
  Status: string;
}
