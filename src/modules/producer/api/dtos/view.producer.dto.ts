import { CultivationEntity } from 'src/domain/entities/cultivation.entity';
import { IViewProducer } from 'src/domain/entities/producers.entity';

export class ViewProducerDto implements IViewProducer {
  nameProducer: string;
  document: string;
  typeDocument: string;
  nameRanch: string;
  county: string;
  state: string;
  totalHectareArea: number;
  totalArableArea: number;
  totalVegetationArea: number;
  isActive: boolean;
  cultivation: CultivationEntity[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
