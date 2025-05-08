// src/live/live.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveService } from './live.service';
import { LiveController } from './live.controller';
import { Live } from './live.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  controllers: [LiveController],
  providers: [LiveService],
})
export class LiveModule {}
