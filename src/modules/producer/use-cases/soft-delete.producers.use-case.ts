import { Inject, Injectable, Logger } from '@nestjs/common';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { ISoftDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/soft-delete.producers.use-case';
import { ViewProducerDto } from '../api/dtos/view.producer.dto';

@Injectable()
export class SoftDeleteProducersUseCase implements ISoftDeleteProducersUseCase {
  constructor(
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(SoftDeleteProducersUseCase.name);
  }

  async execute(id: string): Promise<ViewProducerDto> {
    this.logger.log(`Deleting producer with id: ${id}`);
    return this.producersRepository.softDelete(id);
  }
}
