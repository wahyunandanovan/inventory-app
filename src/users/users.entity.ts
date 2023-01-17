import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;
  
  @ApiProperty()
  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
