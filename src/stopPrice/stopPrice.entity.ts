// stopPrice.entity.ts
import { State } from 'src/state/state.entity';
import { Stop } from 'src/stop/stop.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class StopPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({comment:  "When the price was effective"})
  timestamp: Date; 

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Stop, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'stop_code' })
  stop: Stop;
}
