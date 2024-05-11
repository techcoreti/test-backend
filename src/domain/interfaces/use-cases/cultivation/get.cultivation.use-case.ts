export interface IGetCultivationUseCase {
  execute(producerId: string, cultivationId: string): Promise<any>;
}

export const IGetCultivationUseCase = Symbol('IGetCultivationUseCase');
