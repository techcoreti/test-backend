import { Inject, Injectable } from '@nestjs/common';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { IUpdateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/update.cultivation.use-case';
import { UpdateCultivationDto } from '../api/dtos/update.cultivation.dto';

@Injectable()
export class UpdateCultivationUseCase implements IUpdateCultivationUseCase {
  constructor(
    @Inject(ICultivationRepository)
    private readonly cultivationRepository: ICultivationRepository,
  ) {}
  async execute(
    producerId: string,
    cultivationId: string,
    data: UpdateCultivationDto,
  ): Promise<any> {
    return this.cultivationRepository.update(producerId, cultivationId, data);
  }
}
