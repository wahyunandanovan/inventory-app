import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService extends TypeOrmCrudService<Sales> {
  constructor(@InjectRepository(Sales) repo) {
    super(repo);
  }
}
