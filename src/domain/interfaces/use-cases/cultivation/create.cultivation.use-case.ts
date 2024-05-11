import { CreateCultivationDto } from 'src/modules/cultivation/api/dtos/create.cultivation.dto';

export interface ICreateCultivationUseCase {
  execute(producerId: string, data: CreateCultivationDto): Promise<any>;
}

export const ICreateCultivationUseCase = Symbol('ICreateCultivationUseCase');
