// src/state/state.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { State } from './state.entity';
import { StateSeeder } from './state.seed';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController],
  providers: [StateService, StateSeeder],
})
export class StateModule {}
