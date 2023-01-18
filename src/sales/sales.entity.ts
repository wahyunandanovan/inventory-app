import { ApiProperty } from '@nestjs/swagger';
import { Products } from 'src/products/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @CreateDateColumn()
  public created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  public updated_at: Date;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ default: 0 })
  quantity: number;

  @ApiProperty()
  @Column({ default: 0 })
  total: number;
}
