import { Inject, Injectable, Logger } from '@nestjs/common';
import { validateUtils } from 'src/commons/utils';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { ICreateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/create.producers.use-case';
import { CreateProducersDto } from '../api/dtos/create.producer.dto';
import { ViewProducerDto } from '../api/dtos/view.producer.dto';

@Injectable()
export class CreateProducersUseCase implements ICreateProducersUseCase {
  constructor(
    private readonly logger: Logger,
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
  ) {
    this.logger = new Logger(CreateProducersUseCase.name);
  }

  async execute(data: CreateProducersDto): Promise<ViewProducerDto> {
    try {
      validateUtils.hectareCalcArea(data);
      return this.producersRepository.create(data);
    } catch (error) {
      this.logger.log(error.message);
      throw error;
    }
  }
}
