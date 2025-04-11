import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './state.entity';

@Injectable()
export class StateSeeder{
  constructor(
    @InjectRepository(State)
    private stateRepo: Repository<State>,
  ) {}

  async seed() {
    await this.stateRepo.clear();
    await this.stateRepo.save([
      { code: 'WI', tax_rate: 0.05 },
      { code: 'IL', tax_rate: 0.11 },
    ]);
  }
}
