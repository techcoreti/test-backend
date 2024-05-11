import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { MessagesWarning } from 'src/commons/constants/messages.errors';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { ICreateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/create.cultivation.use-case';
import { IGetProducersUseCase } from 'src/domain/interfaces/use-cases/producer/get.producers.use-case';
import { CreateCultivationDto } from '../api/dtos/create.cultivation.dto';

@Injectable()
export class CreateCultivationUseCase implements ICreateCultivationUseCase {
  constructor(
    @Inject(ICultivationRepository)
    private readonly cultivationRepository: ICultivationRepository,
    @Inject(IGetProducersUseCase)
    private readonly getProducersUseCase: IGetProducersUseCase,
  ) {}
  async execute(producerId: string, data: CreateCultivationDto): Promise<any> {
    let totalActualCultivation: number = 0;
    try {
      const producer = await this.getProducersUseCase.execute(producerId);
      if (producer === null)
        throw new BadRequestException(MessagesWarning(null).recordNotFound);
      const cultivation = await this.cultivationRepository.getAll(producerId);

      // Obtem o total já plantado
      cultivation.forEach((area) => {
        totalActualCultivation += area.areaArable;
      });

      // Soma o total plantado mais o que deseja plantar
      const newAreaArable = totalActualCultivation + data.areaArable;

      // Exibe o total da area disponível para plantio
      const totalFree = producer.totalArableArea - totalActualCultivation;

      if (newAreaArable > producer.totalArableArea)
        throw new BadRequestException(
          `Requested area not available, area available ${totalFree}.`,
        );

      return this.cultivationRepository.create(producerId, data);
    } catch (error) {
      throw error;
    }
  }
}
