import { Inject, Injectable } from '@nestjs/common';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { IDeleteCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/delete.cultivation.use-case';

@Injectable()
export class DeleteCultivationUseCase implements IDeleteCultivationUseCase {
  constructor(
    @Inject(ICultivationRepository)
    private readonly cultivationRepository: ICultivationRepository,
  ) {}
  async execute(producerId: string, cultivationId: string): Promise<any> {
    return this.cultivationRepository.delete(producerId, cultivationId);
  }
}
