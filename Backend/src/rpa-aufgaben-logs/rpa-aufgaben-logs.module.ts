// src/rpa-aufgaben-logs/rpa-aufgaben-logs.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RpaAufgabenLogsService } from './rpa-aufgaben-logs.service';
import { RpaAufgabenLogsController } from './rpa-aufgaben-logs.controller';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RpaAufgabenLogs])],
  controllers: [RpaAufgabenLogsController],
  providers: [RpaAufgabenLogsService],
})
export class RpaAufgabenLogsModule {}
