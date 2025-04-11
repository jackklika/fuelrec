import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stop } from './stop.entity';
import { StopSeeder } from './stop.seed';

@Injectable()
export class StopService implements OnModuleInit {
  constructor(
    @InjectRepository(Stop)
    private stopRepo: Repository<Stop>,
    private readonly seeder: StopSeeder,
  ) {}

  async onModuleInit() {
    await this.seeder.seed();
  }

  async getAll(): Promise<Stop[]> {
    return this.stopRepo.find();
  }

  async getOne(id: string): Promise<Stop | null> {
    return this.stopRepo.findOneBy({ id });
  }
}
