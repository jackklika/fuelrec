import { Controller, Get, Param } from '@nestjs/common';
import { StopService } from './stop.service';

@Controller('stop')
export class StopController {
  constructor(private readonly stateService: StopService) {}

  @Get()
  getAll() {
    return this.stateService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.stateService.getOne(id);
  }
}
