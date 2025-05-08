// src/entwickler/entwickler.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntwicklerService } from './entwickler.service';
import { EntwicklerController } from './entwickler.controller';
import { Entwickler } from './entwickler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entwickler])],
  controllers: [EntwicklerController],
  providers: [EntwicklerService],
})
export class EntwicklerModule {}

