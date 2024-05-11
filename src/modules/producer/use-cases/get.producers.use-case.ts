import { Inject, Injectable, Logger } from '@nestjs/common';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { IGetProducersUseCase } from 'src/domain/interfaces/use-cases/producer/get.producers.use-case';
import { ViewProducerDto } from '../api/dtos/view.producer.dto';

@Injectable()
export class GetProducersUseCase implements IGetProducersUseCase {
  constructor(
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(GetProducersUseCase.name);
  }

  async execute(id: string): Promise<ViewProducerDto> {
    this.logger.log(`Getting producer by id: ${id}`);
    return this.producersRepository.get(id);
  }
}
