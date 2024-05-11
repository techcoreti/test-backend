import { Inject, Injectable, Logger } from '@nestjs/common';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { IGetAllProducersUseCase } from 'src/domain/interfaces/use-cases/producer/getall.producers.use-case';
import { ViewProducerDto } from '../api/dtos/view.producer.dto';

@Injectable()
export class GetAllProducersUseCase implements IGetAllProducersUseCase {
  constructor(
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(GetAllProducersUseCase.name);
  }

  async execute(): Promise<ViewProducerDto[]> {
    this.logger.log(`Getting producers.`);
    return this.producersRepository.getAll();
  }
}
