// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column({ nullable: true })
  Address: string;

  @Column({ nullable: true })
  City: string;

  @Column({ nullable: true })
  Region: string;

  @Column({ nullable: true })
  Country: string;

  @Column({ nullable: true })
  Postal: string;

  @Column({ nullable: true })
  Phone: string;

  @Column({ nullable: true })
  Email: string;
}

