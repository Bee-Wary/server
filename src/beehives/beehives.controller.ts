import { Controller, Get } from '@nestjs/common';

@Controller('beehives')
export class BeehivesController {
  @Get()
  findAll(): any {
    return 'test';
  }
}
