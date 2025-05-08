// src/userlogon/userlogon.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserLogon {
  @PrimaryGeneratedColumn()
  UserID: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  UserName: string;

  @Column()
  Pass: string;

  @Column()
  Salt: string;

  @Column()
  State: number;

  @Column()
  Type: number;

  @Column()
  DateJoined: Date;

  @Column()
  DateLastModified: Date;
}
