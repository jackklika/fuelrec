
import { Injectable } from '@nestjs/common';
import { Stop } from './stop.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from 'src/state/state.entity';


@Injectable()
export class StopSeeder  {
  constructor(
    @InjectRepository(Stop)
    private stopRepo: Repository<Stop>,
    @InjectRepository(State)
    private stateRepo: Repository<State>,
  ) {}
    async seed() {
        await this.stopRepo.clear();
        const states: State[] = await this.stateRepo.find();

        // Create 10 random stops per state
        const stops = states.flatMap(state => 
            Array.from({ length: 10 }, (_, index) => ({
                id: `STOP-${state.code}-${index + 1}`, // Unique ID for each stop
                state: state,
            }))
        );

        await this.stopRepo.save(stops);
    }
}
