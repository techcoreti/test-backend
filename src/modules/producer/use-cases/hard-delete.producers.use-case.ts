import { Inject, Injectable, Logger } from '@nestjs/common';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { IHardDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/hard-delete.producers.use-case';
import { ViewProducerDto } from '../api/dtos/view.producer.dto';

@Injectable()
export class HardDeleteProducersUseCase implements IHardDeleteProducersUseCase {
  constructor(
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(HardDeleteProducersUseCase.name);
  }

  async execute(id: string): Promise<ViewProducerDto> {
    this.logger.log(`Deleting producer with id: ${id}`);
    return this.producersRepository.hardDelete(id);
  }
}
