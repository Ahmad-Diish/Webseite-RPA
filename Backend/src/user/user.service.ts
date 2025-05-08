// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(UserID: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { UserID }, // Replace 'id' with the actual primary column name if different
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${UserID} not found`);
    }
    return user;
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
