import { Inject, Injectable } from '@nestjs/common';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { IGetCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/get.cultivation.use-case';
import { ViewCultivationDto } from '../api/dtos/view.cultivation.dto';

@Injectable()
export class GetCultivationUseCase implements IGetCultivationUseCase {
  constructor(
    @Inject(ICultivationRepository)
    private readonly cultivationRepository: ICultivationRepository,
  ) {}
  async execute(
    producerId: string,
    cultivationId: string,
  ): Promise<ViewCultivationDto> {
    return this.cultivationRepository.get(producerId, cultivationId);
  }
}
