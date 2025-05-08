// src/wishlist/wishlist.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
  ) {}

  async findAll(): Promise<Wishlist[]> {
    return this.wishlistRepository.find();
  }

  async findOne(id: number): Promise<Wishlist> {
    return this.wishlistRepository.findOne(id);
  }

  async create(wishlist: Wishlist): Promise<Wishlist> {
    return this.wishlistRepository.save(wishlist);
  }

  async update(id: number, wishlist: Partial<Wishlist>): Promise<Wishlist> {
    await this.wishlistRepository.update(id, wishlist);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.wishlistRepository.delete(id);
  }
}
