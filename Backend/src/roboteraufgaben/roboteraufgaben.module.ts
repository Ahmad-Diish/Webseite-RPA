// src/roboter-aufgabe/roboter-aufgabe.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboterAufgabeService } from './roboter-aufgabe.service';
import { RoboterAufgabeController } from './roboter-aufgabe.controller';
import { RoboterAufgabe } from './roboter-aufgabe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoboterAufgabe])],
  controllers: [RoboterAufgabeController],
  providers: [RoboterAufgabeService],
})
export class RoboterAufgabeModule {}

