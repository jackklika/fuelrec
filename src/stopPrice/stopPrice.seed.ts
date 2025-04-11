// src/stopPrice/stopPrice.seeder.ts
import { Injectable } from '@nestjs/common';
import { StopPrice } from './stopPrice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stop } from 'src/stop/stop.entity';

@Injectable()
export class StopPriceSeeder {
  constructor(
    @InjectRepository(StopPrice)
    private stopPriceRepo: Repository<StopPrice>,
    @InjectRepository(Stop)
    private stopRepo: Repository<Stop>,
  ) {}

  async seed() {
    //await this.stopPriceRepo.clear();

    const stops = await this.stopRepo.find();
    const allPrices: StopPrice[] = [];

    for (const stop of stops) {
      for (let i = 0; i < 100; i++) {
        // generate sane random price
        var price = parseFloat((Math.random() * (5.5 - 2.5) + 2.5).toFixed(2));
        if (stop.state.code === "IL") {
            price += 0.5 // Illinois is always more expensive :)
        }
        const stopPrice = this.stopPriceRepo.create({ price, stop });
        allPrices.push(stopPrice);
      }
    }
    //console.log("PRICES", allPrices);

    await this.stopPriceRepo.save(allPrices);

    console.log("POST-PRICES", await this.stopPriceRepo.find())
  }
}
