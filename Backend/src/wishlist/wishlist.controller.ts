// src/wishlist/wishlist.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Wishlist } from './wishlist.entity';

@Controller('wishlists')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async findAll(): Promise<Wishlist[]> {
    return this.wishlistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Wishlist> {
    return this.wishlistService.findOne(id);
  }

  @Post()
  async create(@Body() wishlist: Wishlist): Promise<Wishlist> {
    return this.wishlistService.create(wishlist);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() wishlist: Partial<Wishlist>): Promise<Wishlist> {
    return this.wishlistService.update(id, wishlist);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.wishlistService.remove(id);
  }
}
