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
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/create.cultivation.use-case';
import { IDeleteCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/delete.cultivation.use-case';
import { IGetCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/get.cultivation.use-case';
import { IGetAllCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/getall.cultivation.use-case';
import { IUpdateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/update.cultivation.use-case';
import { CreateCultivationUseCase } from '../../use-cases/create.cultivation.use-case';
import { CreateCultivationDto } from '../dtos/create.cultivation.dto';
import { ViewCultivationDto } from '../dtos/view.cultivation.dto';

@Controller('producers')
@ApiTags('Cultivations')
@ApiNotFoundResponse({
  description: 'Card not found',
})
export class CultivationController {
  constructor(
    @Inject(ICreateCultivationUseCase)
    private readonly createCultivationUseCase: CreateCultivationUseCase,
    @Inject(IUpdateCultivationUseCase)
    private readonly updateCultivationUseCase: IUpdateCultivationUseCase,
    @Inject(IDeleteCultivationUseCase)
    private readonly deleteCultivationUseCase: IDeleteCultivationUseCase,
    @Inject(IGetCultivationUseCase)
    private readonly getCultivationUseCase: IGetCultivationUseCase,
    @Inject(IGetAllCultivationUseCase)
    private readonly getAllCultivationUseCase: IGetAllCultivationUseCase,
  ) {}

  @ApiOkResponse()
  @ApiOperation({
    summary: 'Cria uma nova Cultura',
    description:
      'Efetua o cadastro validando todas as informações, inclusive verificando os valores em hectares informando, não permite usar uma área maior disponível na fazenda.',
  })
  @Post('/:producer/cultivations')
  async create(
    @Param('producer') producerId: string,
    @Body() data: CreateCultivationDto,
  ): Promise<any> {
    return this.createCultivationUseCase.execute(producerId, data);
  }
  @ApiOkResponse()
  @ApiOperation({
    description: 'Atualiza os cadastros das Culturas.',
  })
  @Patch(':producer/cultivations/:cultivation')
  async update(
    @Body() data: any,
    @Param('producer') producerId: string,
    @Param('cultivation') cultivationId: string,
  ): Promise<void> {
    return this.updateCultivationUseCase.execute(
      producerId,
      cultivationId,
      data,
    );
  }
  @ApiOkResponse()
  @ApiOperation({
    description: 'Exclui os cadastros das Culturas.',
  })
  @Delete(':producer/cultivations/:cultivation')
  async delete(
    @Param('producer') producerId: string,
    @Param('cultivation') cultivationId: string,
  ): Promise<void> {
    return this.deleteCultivationUseCase.execute(producerId, cultivationId);
  }
  @ApiOkResponse()
  @ApiOperation({
    description: 'Retorna os cadastro da Cultura informada.',
  })
  @Get('/:producer/cultivations')
  async getCultivation(
    @Param('producer') producerId: string,
  ): Promise<ViewCultivationDto> {
    return this.getAllCultivationUseCase.execute(producerId);
  }
  @ApiOkResponse()
  @ApiOperation({
    description: 'Lista todos os cadastros das Culturas.',
  })
  @Get('/:producer/cultivations/:cultivation')
  async getAllCultivation(
    @Param('producer') producerId: string,
    @Param('cultivation') cultivationId: string,
  ): Promise<any> {
    return this.getCultivationUseCase.execute(producerId, cultivationId);
  }
}
