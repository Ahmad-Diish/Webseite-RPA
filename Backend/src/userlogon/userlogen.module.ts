// src/userlogon/userlogon.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLogonService } from './userlogen.service';
import { UserLogonController } from './userlogen.controller';
import { UserLogon } from './userlogen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogon])],
  controllers: [UserLogonController],
  providers: [UserLogonService],
})
export class UserLogonModule {}
