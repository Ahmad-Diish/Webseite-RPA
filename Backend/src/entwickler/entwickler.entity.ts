// src/entwickler/entwickler.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Entwickler {
  @PrimaryGeneratedColumn()
  entwicklerID: number;

  @Column({ nullable: true })
  FirstName: string;

  @Column()
  LastName: string;

  @Column({ nullable: true })
  Email: string;

  @Column({ default: 0 })
  YearOfBirth: number;

  @Column({ nullable: true, type: 'longtext' })
  Details: string;

  @Column()
  entwicklerFotoID: number;
}

