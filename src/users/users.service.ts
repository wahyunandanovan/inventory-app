import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<Users> {
  constructor(@InjectRepository(Users) repo) {
    super(repo);
  }
}
