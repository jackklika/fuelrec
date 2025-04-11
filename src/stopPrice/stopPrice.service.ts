import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StopPrice } from './stopPrice.entity';
import { Repository } from 'typeorm';
import { StopSeeder } from 'src/stop/stop.seed';

@Injectable()
export class StopPriceService{
  constructor(
    @InjectRepository(StopPrice)
    private stopPriceRepo: Repository<StopPrice>,
  ) {}


  async getLatestPrice(stop_id: string): Promise<number | undefined> {
    const record = await this.stopPriceRepo.findOne({
      where: { stop: { id: stop_id } },
      order: { timestamp: 'DESC' },
    });
    return record?.price;
  }
}
