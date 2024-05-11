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
import { ICreateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/create.cultivation.use-case';
import { IDeleteCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/delete.cultivation.use-case';
import { IGetCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/get.cultivation.use-case';
import { IGetAllCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/getall.cultivation.use-case';
import { IUpdateCultivationUseCase } from 'src/domain/interfaces/use-cases/cultivation/update.cultivation.use-case';
import { CreateCultivationUseCase } from '../../use-cases/create.cultivation.use-case';
import { CreateCultivationDto } from '../dtos/create.cultivation.dto';
import { ViewCultivationDto } from '../dtos/view.cultivation.dto';

@Controller('producers')
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

  @Post('/:producer/cultivations')
  async create(
    @Param('producer') producerId: string,
    @Body() data: CreateCultivationDto,
  ): Promise<any> {
    return this.createCultivationUseCase.execute(producerId, data);
  }
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
  @Delete(':producer/cultivations/:cultivation')
  async delete(
    @Param('producer') producerId: string,
    @Param('cultivation') cultivationId: string,
  ): Promise<void> {
    return this.deleteCultivationUseCase.execute(producerId, cultivationId);
  }
  @Get('/:producer/cultivations')
  async getCultivation(
    @Param('producer') producerId: string,
  ): Promise<ViewCultivationDto> {
    return this.getAllCultivationUseCase.execute(producerId);
  }
  @Get('/:producer/cultivations/:cultivation')
  async getAllCultivation(
    @Param('producer') producerId: string,
    @Param('cultivation') cultivationId: string,
  ): Promise<any> {
    return this.getCultivationUseCase.execute(producerId, cultivationId);
  }
}
