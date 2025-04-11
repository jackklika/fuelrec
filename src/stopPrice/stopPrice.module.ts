import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopPriceService } from './stopPrice.service';
import { StopPriceSeeder } from './stopPrice.seed';
import { StopPrice } from './stopPrice.entity';
import { Stop } from 'src/stop/stop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StopPrice, Stop])],
  controllers: [],
  providers: [StopPriceService, StopPriceSeeder],
  exports: [StopPriceService],
})
export class StopPriceModule {}
