import { UpdateCultivationDto } from 'src/modules/cultivation/api/dtos/update.cultivation.dto';

export interface IUpdateCultivationUseCase {
  execute(
    peoducer: string,
    cultivation: string,
    data: UpdateCultivationDto,
  ): Promise<any>;
}

export const IUpdateCultivationUseCase = Symbol('IUpdateCultivationUseCase');
