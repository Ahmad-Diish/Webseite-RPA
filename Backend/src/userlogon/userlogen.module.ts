// src/userlogon/userlogon.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLogonService } from './userlogon.service';
import { UserLogonController } from './userlogon.controller';
import { UserLogon } from './userlogon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogon])],
  controllers: [UserLogonController],
  providers: [UserLogonService],
})
export class UserLogonModule {}
