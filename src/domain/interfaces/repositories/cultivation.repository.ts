import { ViewCultivationDto } from 'src/modules/cultivation/api/dtos/view.cultivation.dto';

export interface ICultivationRepository {
  create(producerId: string, data: any): Promise<any>;
  update(producerId: string, cultivationId: string, data: any): Promise<any>;
  delete(producerId: string, cultivationId: string): Promise<any>;
  get(producerId: string, cultivationId: string): Promise<ViewCultivationDto>;
  getAll(producerId: string): Promise<ViewCultivationDto[]>;
}

export const ICultivationRepository = Symbol('ICultivationRepository');
