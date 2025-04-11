import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class State {
  @PrimaryColumn()
  code: string;

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  tax_rate: number; // todo: this could change
}