import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersEntity } from 'src/domain/entities/producers.entity';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { ICreateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/create.producers.use-case';
import { IGetProducersUseCase } from 'src/domain/interfaces/use-cases/producer/get.producers.use-case';
import { IGetAllProducersUseCase } from 'src/domain/interfaces/use-cases/producer/getall.producers.use-case';
import { IHardDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/hard-delete.producers.use-case';
import { ISoftDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/soft-delete.producers.use-case';
import { IUpdateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/update.producers.use-case';
import { ProducersRepository } from 'src/infrastructure/repositories/producers.repository';
import { ProducerController } from './api/controller/producer.controller';
import { CreateProducersUseCase } from './use-cases/create.producers.use-case';
import { GetProducersUseCase } from './use-cases/get.producers.use-case';
import { GetAllProducersUseCase } from './use-cases/getall.producers.use-case';
import { HardDeleteProducersUseCase } from './use-cases/hard-delete.producers.use-case';
import { SoftDeleteProducersUseCase } from './use-cases/soft-delete.producers.use-case';
import { UpdateProducersUseCase } from './use-cases/update.producers.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProducersEntity])],
  controllers: [ProducerController],
  providers: [
    Logger,
    {
      provide: IProducersRepository,
      useClass: ProducersRepository,
    },
    {
      provide: ICreateProducersUseCase,
      useClass: CreateProducersUseCase,
    },
    {
      provide: IUpdateProducersUseCase,
      useClass: UpdateProducersUseCase,
    },
    {
      provide: ISoftDeleteProducersUseCase,
      useClass: SoftDeleteProducersUseCase,
    },
    {
      provide: IHardDeleteProducersUseCase,
      useClass: HardDeleteProducersUseCase,
    },
    {
      provide: IGetProducersUseCase,
      useClass: GetProducersUseCase,
    },
    {
      provide: IGetAllProducersUseCase,
      useClass: GetAllProducersUseCase,
    },
  ],
  exports: [IGetProducersUseCase, IProducersRepository],
})
export class ProducersModule {}
