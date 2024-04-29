import { Module } from '@nestjs/common';
import { BeehivesService } from './beehives.service';
import { BeehivesController } from './beehives.controller';

@Module({
  controllers: [BeehivesController],
  providers: [BeehivesService],
})
export class BeehivesModule {}
