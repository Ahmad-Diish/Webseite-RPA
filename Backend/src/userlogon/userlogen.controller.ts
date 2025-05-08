// src/userlogon/userlogon.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserLogonService } from './userlogon.service';
import { UserLogon } from './userlogon.entity';

@Controller('userlogons')
export class UserLogonController {
  constructor(private readonly userLogonService: UserLogonService) {}

  @Get()
  async findAll(): Promise<UserLogon[]> {
    return this.userLogonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserLogon> {
    return this.userLogonService.findOne(id);
  }

  @Post()
  async create(@Body() userLogon: UserLogon): Promise<UserLogon> {
    return this.userLogonService.create(userLogon);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userLogon: Partial<UserLogon>,
  ): Promise<UserLogon> {
    return this.userLogonService.update(id, userLogon);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userLogonService.remove(id);
  }
}

