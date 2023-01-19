import { ApiProperty } from '@nestjs/swagger';
import Sales from 'src/sales/sales.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Users {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  password: string;

  // @ApiProperty()
  // @Column()
  // email: string;

  // @ApiProperty()
  // @Column()
  // address: string;
}
