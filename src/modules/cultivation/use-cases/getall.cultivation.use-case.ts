import { Inject, Injectable } from '@nestjs/common';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { IGetAllCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/getall.cultivation.use-case';

@Injectable()
export class GetAllCultivationUseCase implements IGetAllCultivationUseCase {
  constructor(
    @Inject(ICultivationRepository)
    private readonly cultivationRepository: ICultivationRepository,
  ) {}
  async execute(producerId: string): Promise<any> {
    return this.cultivationRepository.getAll(producerId);
  }
}
