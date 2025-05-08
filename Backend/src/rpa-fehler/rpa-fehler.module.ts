// src/rpa-fehler/rpa-fehler.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RpaFehlerService } from './rpa-fehler.service';
import { RpaFehlerController } from './rpa-fehler.controller';
import { RpaFehler } from './rpa-fehler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RpaFehler])],
  controllers: [RpaFehlerController],
  providers: [RpaFehlerService],
})
export class RpaFehlerModule {}
