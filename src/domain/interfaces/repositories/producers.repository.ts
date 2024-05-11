import { CreateProducersDto } from 'src/modules/producer/api/dtos/create.producer.dto';
import { UpdateProducersDto } from 'src/modules/producer/api/dtos/update.producer.dto';
import { ViewProducerDto } from 'src/modules/producer/api/dtos/view.producer.dto';

export interface IProducersRepository {
  create(data: CreateProducersDto): Promise<ViewProducerDto>;
  update(id: string, data: UpdateProducersDto): Promise<any>;
  hardDelete(id: string): Promise<any>;
  softDelete(id: string): Promise<any>;
  get(id: string): Promise<ViewProducerDto>;
  getAll(): Promise<ViewProducerDto[]>;
}

export const IProducersRepository = Symbol('IProducersRepository');
