// src/rpa-aufgabe/rpa-aufgabe.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RpaAufgabeService } from './rpa-aufgaben.service';
import { RpaAufgabeController } from './rpa-aufgaben.controller';
import { RpaAufgabe } from './rpa-aufgaben.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RpaAufgabe])],
  controllers: [RpaAufgabeController],
  providers: [RpaAufgabeService],
})
export class RpaAufgabeModule {}
