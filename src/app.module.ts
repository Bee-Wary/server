import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeehivesController } from './beehives/beehives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URL,
      ssl: true,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
      useNewUrlParser: true,
      authSource: 'admin',
      logging: true,
    }),
  ],
  controllers: [AppController, BeehivesController],
  providers: [AppService],
})
export class AppModule {}
