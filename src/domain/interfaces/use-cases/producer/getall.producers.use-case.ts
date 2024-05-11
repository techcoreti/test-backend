import { ViewProducerDto } from 'src/modules/producer/api/dtos/view.producer.dto';

export interface IGetAllProducersUseCase {
  execute(): Promise<ViewProducerDto[]>;
}

export const IGetAllProducersUseCase = Symbol('IGetAllProducersUseCase');
