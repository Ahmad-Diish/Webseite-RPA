// src/wishlist/wishlist.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roboter } from '../roboter/roboter.entity';
import { User } from '../user/user.entity';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
   wishlistID: number;

  @ManyToOne(() => Roboter)
  @JoinColumn()
  roboter: Roboter;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  created_at: Date;
}
