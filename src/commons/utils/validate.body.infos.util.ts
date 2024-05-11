import { BadGatewayException } from '@nestjs/common';
import { CreateProducersDto } from 'src/modules/producer/api/dtos/create.producer.dto';
import { UpdateProducersDto } from 'src/modules/producer/api/dtos/update.producer.dto';
import { MessagesWarning } from '../constants/messages.errors';

export const hectareCalcArea = (
  data: CreateProducersDto | UpdateProducersDto,
) => {
  const total = data.totalVegetationArea + data.totalArableArea;
  if (total > data.totalHectareArea) {
    throw new BadGatewayException(MessagesWarning(null).totalAreaMinor);
  }
};
