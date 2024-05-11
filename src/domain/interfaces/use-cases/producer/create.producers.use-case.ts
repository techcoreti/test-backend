import { CreateProducersDto } from 'src/modules/producer/api/dtos/create.producer.dto';

export interface ICreateProducersUseCase {
  execute(data: CreateProducersDto): Promise<any>;
}

export const ICreateProducersUseCase = Symbol('ICreateProducersUseCase');
