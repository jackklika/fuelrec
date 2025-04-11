import { Controller, Get, Param } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  getAll() {
    return this.stateService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.stateService.getOne(id);
  }
}
