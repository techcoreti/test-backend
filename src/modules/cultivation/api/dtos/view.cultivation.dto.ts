import { IViewCultivation } from 'src/domain/entities/cultivation.entity';
import { ProducersEntity } from 'src/domain/entities/producers.entity';

export class ViewCultivationDto implements IViewCultivation {
  name: string;
  description: string;
  areaArable: number;
  isActive: boolean;
  producer: ProducersEntity;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
