// src/rpa-aufgabe/rpa-aufgabe.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RpaAufgabeService } from './rpa-aufgabe.service';
import { RpaAufgabeController } from './rpa-aufgabe.controller';
import { RpaAufgabe } from './rpa-aufgabe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RpaAufgabe])],
  controllers: [RpaAufgabeController],
  providers: [RpaAufgabeService],
})
export class RpaAufgabeModule {}
