import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stop } from './stop.entity';
import { StopPriceService } from 'src/stopPrice/stopPrice.service';

export interface StopDto {
  id: string,
  state_code: string,
  latestPrice?: number
}

export class StopMapper {
  static async toDto(
    stop: Stop,
    stopPriceService: StopPriceService,
  ): Promise<StopDto> {
    const latestPrice = await stopPriceService.getLatestPrice(stop.id);
    return {
      id: stop.id,
      state_code: stop.state.code,
      latestPrice,
    };
  }
}

@Injectable()
export class StopService {
  constructor(
    @InjectRepository(Stop)
    private stopRepo: Repository<Stop>,
    private readonly stopPriceService: StopPriceService,
  ) {}

  async getAll(): Promise<StopDto[]> {
    const stops = await this.stopRepo.find();
    return Promise.all(stops.map(stop => StopMapper.toDto(stop, this.stopPriceService)));
  }

  async getOne(id: string): Promise<StopDto | null> {
    const stop = await this.stopRepo.findOneBy({ id });
    if (!stop) return null;
    return StopMapper.toDto(stop, this.stopPriceService);
  }
}
