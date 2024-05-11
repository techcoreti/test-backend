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
import { ApiNotFoundResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
@ApiTags('Producers')
@ApiNotFoundResponse({
  description: 'Card not found',
})
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

  @ApiOperation({
    summary: 'Cria um novo Fazenda',
    description:
      'Efetua o cadastro validando todas as informações, inclusive verificando os valores em hectares informando, não permite usar uma área maior disponível na fazenda.',
  })
  @Post()
  async create(@Body() data: CreateProducersDto): Promise<IViewProducer> {
    return this.createProducersUseCase.execute(data);
  }

  @ApiOperation({
    description: 'Atualiza o cadastros das Fazendas.',
  })
  @Patch(':id')
  async update(
    @Body() data: UpdateProducersDto,
    @Param('id') id: string,
  ): Promise<void> {
    return this.updateProducersUseCase.execute(id, data);
  }

  @ApiOperation({
    description: '(Hard Delete) - Exclui o cadastros das Fazendas.',
  })
  @Delete(':id/hard')
  async hardDelete(@Param('id') id: string): Promise<void> {
    return this.hardDeleteProducersUseCase.execute(id);
  }

  @ApiOperation({
    description: '(Soft Delete) - Exclui o cadastros das Fazendas.',
  })
  @Delete(':id/soft')
  async softDelete(@Param('id') id: string): Promise<void> {
    return this.softDeleteProducersUseCase.execute(id);
  }

  @ApiOperation({
    description: 'Lista todos os cadastros das Fazendas.',
  })
  @Get()
  async getAll(): Promise<ViewProducerDto[]> {
    return this.getAllProducersUseCase.execute();
  }

  @ApiOperation({
    description: 'Lista os cadastros das Fazendas com base no ID.',
  })
  @Get(':id')
  async get(@Param('id') id: string): Promise<ViewProducerDto> {
    return this.getProducersUseCase.execute(id);
  }
}
