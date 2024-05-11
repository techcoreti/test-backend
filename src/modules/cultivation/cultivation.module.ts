import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivationEntity } from 'src/domain/entities/cultivation.entity';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { ICreateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/create.cultivation.use-case';
import { IDeleteCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/delete.cultivation.use-case';
import { IGetCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/get.cultivation.use-case';
import { IGetAllCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/getall.cultivation.use-case';
import { IUpdateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/update.cultivation.use-case';
import { CultivationRepository } from 'src/infrastructure/repositories/cultivation.repository';
import { ProducersModule } from '../producer/producer.module';
import { CultivationController } from './api/controller/cultivation.controller';
import { CreateCultivationUseCase } from './use-cases/create.cultivation.use-case';
import { DeleteCultivationUseCase } from './use-cases/delete.cultivation.use-case';
import { GetCultivationUseCase } from './use-cases/get.cultivation.use-case';
import { GetAllCultivationUseCase } from './use-cases/getall.cultivation.use-case';
import { UpdateCultivationUseCase } from './use-cases/update.cultivation.use-case';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([CultivationEntity]),
    ProducersModule,
  ],
  controllers: [CultivationController],
  providers: [
    Logger,
    {
      provide: ICultivationRepository,
      useClass: CultivationRepository,
    },
    {
      provide: ICultivationRepository,
      useClass: CultivationRepository,
    },
    {
      provide: ICreateCultivationUseCase,
      useClass: CreateCultivationUseCase,
    },
    {
      provide: IUpdateCultivationUseCase,
      useClass: UpdateCultivationUseCase,
    },
    {
      provide: IDeleteCultivationUseCase,
      useClass: DeleteCultivationUseCase,
    },
    {
      provide: IGetCultivationUseCase,
      useClass: GetCultivationUseCase,
    },
    {
      provide: IGetAllCultivationUseCase,
      useClass: GetAllCultivationUseCase,
    },
  ],
})
export class CultivationModule {}
