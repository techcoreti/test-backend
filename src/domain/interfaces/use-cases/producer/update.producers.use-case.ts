import { UpdateProducersDto } from 'src/modules/producer/api/dtos/update.producer.dto';

export interface IUpdateProducersUseCase {
  execute(id: string, data: UpdateProducersDto): Promise<any>;
}

export const IUpdateProducersUseCase = Symbol('IUpdateProducersUseCase');
