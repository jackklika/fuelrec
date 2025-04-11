import { Controller, Get, Param } from '@nestjs/common';
import { StopDto, StopService } from './stop.service';
import { Stop } from './stop.entity';

@Controller('stop')
export class StopController {
  constructor(private readonly stateService: StopService) {}

  @Get()
  getAll(): Promise<StopDto[]> {
    return this.stateService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<StopDto | null> {
    return this.stateService.getOne(id);
  }
}
