import { Module } from '@nestjs/common';
import { StopController } from './stop.controller';
import { StopService } from './stop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stop } from './stop.entity';
import { StopSeeder } from './stop.seed';
import { State } from 'src/state/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stop, State])],
  controllers: [StopController],
  providers: [StopService, StopSeeder],
})
export class StopModule {}
