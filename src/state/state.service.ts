import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private stateRepo: Repository<State>,
  ) {}

  async getAll(): Promise<State[]> {
    return this.stateRepo.find();
  }

  async getOne(code: string): Promise<State | null> {
    return this.stateRepo.findOneBy({ code });
  }
}
