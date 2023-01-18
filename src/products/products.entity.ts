import { ApiProperty } from '@nestjs/swagger';
import { Sales } from 'src/sales/sales.entity';
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
export class Products {
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
  image: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;
}
