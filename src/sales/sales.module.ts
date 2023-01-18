import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesController } from './sales.controller';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
