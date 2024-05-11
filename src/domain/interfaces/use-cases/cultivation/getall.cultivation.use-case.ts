export interface IGetAllCultivationUseCase {
  execute(producerId: string): Promise<any>;
}

export const IGetAllCultivationUseCase = Symbol('IGetAllCultivationUseCase');
