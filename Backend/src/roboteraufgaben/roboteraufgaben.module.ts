// src/roboter-aufgabe/roboter-aufgabe.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboterAufgabeService } from './roboteraufgaben.service';
import { RoboterAufgabeController } from './roboteraufgaben.controller';
import { RoboterAufgabe } from './roboteraufgaben.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoboterAufgabe])],
  controllers: [RoboterAufgabeController],
  providers: [RoboterAufgabeService],
})
export class RoboterAufgabeModule {}

