import { ViewProducerDto } from 'src/modules/producer/api/dtos/view.producer.dto';

export interface IGetProducersUseCase {
  execute(id: string): Promise<ViewProducerDto>;
}

export const IGetProducersUseCase = Symbol('IGetProducersUseCase');
