import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  MessagesErrors,
  MessagesInfos,
  MessagesWarning,
} from 'src/commons/constants/messages.errors';
import { ProducersEntity } from 'src/domain/entities/producers.entity';
import { IProducersRepository } from 'src/domain/interfaces/repositories/producers.repository';
import { CreateProducersDto } from 'src/modules/producer/api/dtos/create.producer.dto';
import { UpdateProducersDto } from 'src/modules/producer/api/dtos/update.producer.dto';
import { ViewProducerDto } from 'src/modules/producer/api/dtos/view.producer.dto';
import { Repository, TypeORMError } from 'typeorm';

@Injectable()
export class ProducersRepository implements IProducersRepository {
  constructor(
    @InjectRepository(ProducersEntity)
    private readonly repository: Repository<ProducersEntity>,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(ProducersRepository.name);
  }

  async create(data: CreateProducersDto): Promise<ViewProducerDto> {
    try {
      const created = this.repository.create(data);
      return await this.repository.save(created);
    } catch (error) {
      if (error instanceof TypeORMError) {
        if (
          error.message.includes(
            'duplicate key value violates unique constraint',
          )
        ) {
          this.logger.error('Já existe um produtor com este documento.');
          throw new ConflictException(MessagesWarning(null).errorConflict);
        }
      } else {
        this.logger.log('Erro ao cadastrar o produtor.');
        throw new InternalServerErrorException();
      }
    }
  }
  async update(id: string, data: UpdateProducersDto): Promise<any> {
    try {
      const result = await this.repository.update(id, data);

      if (result.affected === 0) {
        this.logger.log(MessagesWarning(null).recordNotUpdate);
        return { message: MessagesWarning(null).recordNotUpdate };
      }
    } catch (error) {
      if (error instanceof TypeORMError) {
        if (
          error.message.includes(
            'duplicate key value violates unique constraint',
          )
        ) {
          this.logger.error('Já existe um produtor com este documento.');
          throw new ConflictException(MessagesWarning(null).errorConflict);
        }
      } else {
        this.logger.log('Erro ao atualizar o cadastro do produtor.');
        throw new InternalServerErrorException();
      }
    }
  }
  async softDelete(id: string): Promise<any> {
    this.logger.log(`Deleting producer with id: ${id}`);
    try {
      const result = await this.repository.softDelete(id);

      if (result.affected === 0) {
        this.logger.log(MessagesWarning(null).recordDeleted);
        return { message: MessagesWarning(null).recordDeleted };
      }
      return { message: MessagesInfos().producerDeleted };
    } catch (error) {
      if (error instanceof TypeORMError) {
        throw new InternalServerErrorException();
      }
      throw error;
    }
  }
  async hardDelete(id: string): Promise<any> {
    this.logger.log(`Deleting producer with id: ${id}`);
    try {
      const result = await this.repository.delete(id);

      if (result.affected === 0) {
        this.logger.log(MessagesWarning(null).recordDeleted);
        return { message: MessagesWarning(null).recordDeleted };
      }
      return { message: MessagesInfos().producerDeleted };
    } catch (error) {
      if (error instanceof TypeORMError) {
        throw new InternalServerErrorException();
      }
      throw error;
    }
  }
  async get(id: string): Promise<ViewProducerDto> {
    try {
      return await this.repository.findOne({
        where: { id },
        relations: ['cultivations'],
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(null).errorGetRecord);
      throw new BadRequestException();
    }
  }
  async getAll(): Promise<ViewProducerDto[]> {
    try {
      return await this.repository.find({ relations: ['cultivations'] });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(MessagesErrors(null).errorGetRecord);
      throw new BadRequestException();
    }
  }
}
