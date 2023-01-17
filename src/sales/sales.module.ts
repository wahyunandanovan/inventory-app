import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  providers: [SalesService],
  controllers: [SalesController]
})
export class SalesModule {}
