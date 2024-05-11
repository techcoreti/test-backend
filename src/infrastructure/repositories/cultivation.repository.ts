import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { CultivationEntity } from 'src/domain/entities/cultivation.entity';
import { ICultivationRepository } from 'src/domain/interfaces/repositories/cultivation.repository';
import { CreateCultivationDto } from 'src/modules/cultivation/api/dtos/create.cultivation.dto';
import { UpdateCultivationDto } from 'src/modules/cultivation/api/dtos/update.cultivation.dto';
import { ViewCultivationDto } from 'src/modules/cultivation/api/dtos/view.cultivation.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CultivationRepository implements ICultivationRepository {
  constructor(
    @InjectRepository(CultivationEntity)
    private readonly repository: Repository<CultivationEntity>,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(CultivationRepository.name);
  }

  async create(producerId: string, data: CreateCultivationDto): Promise<any> {
    try {
      return await this.repository.save({
        ...data,
        producer: { id: producerId },
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(undefined).errorPostRecord);
      throw new BadRequestException();
    }
  }
  async update(
    producerId: string,
    cultivationId: string,
    data: UpdateCultivationDto,
  ): Promise<void> {
    try {
      await this.repository.update(
        { id: cultivationId, producer: { id: producerId } },
        data,
      );
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(undefined).errorUpdateRecord);
      throw new BadRequestException();
    }
  }
  async delete(producerId: string, cultivationId: string): Promise<void> {
    try {
      await this.repository.delete({
        id: cultivationId,
        producer: { id: producerId },
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(undefined).errorDeleteRecord);
      throw new BadRequestException();
    }
  }
  async get(
    producerId: string,
    cultivationId: string,
  ): Promise<ViewCultivationDto> {
    try {
      return await this.repository.findOne({
        where: {
          id: cultivationId,
          producer: { id: producerId },
        },
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(undefined).errorGetRecord);
      throw new BadRequestException();
    }
  }
  async getAll(producerId: string): Promise<ViewCultivationDto[]> {
    try {
      return await this.repository.find({
        where: { producer: { id: producerId } },
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(undefined).errorGetRecord);
      throw new BadRequestException();
    }
  }
}
