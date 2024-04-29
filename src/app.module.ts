import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BeehivesModule } from './beehives/beehives.module';

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
    BeehivesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
