import { Controller, Get } from '@nestjs/common';
import { BeehivesService } from './beehives.service';
import { Beehive } from './beehive.schema';

@Controller('beehive')
export class BeehivesController {
    constructor(private readonly beehivesService: BeehivesService) {}

  @Get()
  getHives(): Promise<Beehive[]> {
    return this.beehivesService.findAll();
  }
}
