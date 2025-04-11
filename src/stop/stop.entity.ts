import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { State } from '../state/state.entity';

@Entity()
export class Stop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => State, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'state_code' })
  state: State;

}
