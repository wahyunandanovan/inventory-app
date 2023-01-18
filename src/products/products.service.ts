import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Products> {
  constructor(@InjectRepository(Products) repo) {
    super(repo);
  }
}
