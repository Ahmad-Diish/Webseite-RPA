// src/userlogon/userlogon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserLogon } from './userlogen.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserLogonService {
  constructor(
    @InjectRepository(UserLogon)
    private userLogonRepository: Repository<UserLogon>,
  ) {}

  async findAll(): Promise<UserLogon[]> {
    return this.userLogonRepository.find();
  }

  async findOne(id: number): Promise<UserLogon> {
    const userLogon = await this.userLogonRepository.findOne({
      where: { UserID: id }, // Replace 'userLogonID' with the actual primary column name
    });
    if (!userLogon) {
      throw new NotFoundException(`UserLogon with ID ${id} not found`);
    }
    return userLogon;
  }

  async create(userLogon: UserLogon): Promise<UserLogon> {
    return this.userLogonRepository.save(userLogon);
  }

  async update(id: number, userLogon: Partial<UserLogon>): Promise<UserLogon> {
    await this.userLogonRepository.update(id, userLogon);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userLogonRepository.delete(id);
  }
}
