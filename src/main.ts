import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StateSeeder } from './state/state.seed';
import { StopSeeder } from './stop/stop.seed';
import { StopPriceSeeder } from './stopPrice/stopPrice.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const stateSeeder = app.get(StateSeeder);
  await stateSeeder.seed();

  const stopSeeder = app.get(StopSeeder);
  await stopSeeder.seed();

  const stopPriceSeeder = app.get(StopPriceSeeder);
  await stopPriceSeeder.seed();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
