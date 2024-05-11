import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IViewProducer } from 'src/domain/entities/producers.entity';
import { ICreateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/create.producers.use-case';
import { IGetProducersUseCase } from 'src/domain/interfaces/use-cases/producer/get.producers.use-case';
import { IGetAllProducersUseCase } from 'src/domain/interfaces/use-cases/producer/getall.producers.use-case';
import { IHardDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/hard-delete.producers.use-case';
import { ISoftDeleteProducersUseCase } from 'src/domain/interfaces/use-cases/producer/soft-delete.producers.use-case';
import { IUpdateProducersUseCase } from 'src/domain/interfaces/use-cases/producer/update.producers.use-case';
import { CreateProducersDto } from '../dtos/create.producer.dto';
import { UpdateProducersDto } from '../dtos/update.producer.dto';
import { ViewProducerDto } from '../dtos/view.producer.dto';

@Controller('producers')
export class ProducerController {
  constructor(
    @Inject(ICreateProducersUseCase)
    private readonly createProducersUseCase: ICreateProducersUseCase,
    @Inject(IUpdateProducersUseCase)
    private readonly updateProducersUseCase: IUpdateProducersUseCase,
    @Inject(ISoftDeleteProducersUseCase)
    private readonly softDeleteProducersUseCase: ISoftDeleteProducersUseCase,
    @Inject(IHardDeleteProducersUseCase)
    private readonly hardDeleteProducersUseCase: IHardDeleteProducersUseCase,
    @Inject(IGetProducersUseCase)
    private readonly getProducersUseCase: IGetProducersUseCase,
    @Inject(IGetAllProducersUseCase)
    private readonly getAllProducersUseCase: IGetAllProducersUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateProducersDto): Promise<IViewProducer> {
    return this.createProducersUseCase.execute(data);
  }
  @Patch(':id')
  async update(
    @Body() data: UpdateProducersDto,
    @Param('id') id: string,
  ): Promise<void> {
    return this.updateProducersUseCase.execute(id, data);
  }
  @Delete(':id/hard')
  async hardDelete(@Param('id') id: string): Promise<void> {
    return this.hardDeleteProducersUseCase.execute(id);
  }
  @Delete(':id/soft')
  async softDelete(@Param('id') id: string): Promise<void> {
    return this.softDeleteProducersUseCase.execute(id);
  }
  @Get()
  async getAll(): Promise<ViewProducerDto[]> {
    return this.getAllProducersUseCase.execute();
  }
  @Get(':id')
  async get(@Param('id') id: string): Promise<ViewProducerDto> {
    return this.getProducersUseCase.execute(id);
  }
}
