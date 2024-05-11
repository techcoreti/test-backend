import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { CultivationModule } from './modules/cultivation/cultivation.module';
import { ProducersModule } from './modules/producer/producer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProducersModule,
    CultivationModule,
  ],
  providers: [],
})
export class AppModule {}
