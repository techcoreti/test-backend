import { Inject, Injectable, Logger } from '@nestjs/common';
import { validateUtils } from 'src/commons/utils';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { IUpdateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/update.producers.use-case';
import { UpdateProducersDto } from '../api/dtos/update.producer.dto';

@Injectable()
export class UpdateProducersUseCase implements IUpdateProducersUseCase {
  constructor(
    @Inject(IProducersRepository)
    private readonly producersRepository: IProducersRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(UpdateProducersUseCase.name);
  }

  async execute(id: string, data: UpdateProducersDto): Promise<void> {
    try {
      validateUtils.hectareCalcArea(data);
      return this.producersRepository.update(id, data);
    } catch (error) {
      this.logger.log(error.message);
      throw error;
    }
  }
}
