import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StopModule } from './stop/stop.module';
import { StopPriceModule } from './stopPrice/stopPrice.module';
import { Stop } from './stop/stop.entity';
import { StateModule } from './state/state.module';
import { State } from './state/state.entity';
import { StopPrice } from './stopPrice/stopPrice.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Stop, State, StopPrice],
      synchronize: true,
    }),
    StopModule,
    StateModule,
    StopPriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
