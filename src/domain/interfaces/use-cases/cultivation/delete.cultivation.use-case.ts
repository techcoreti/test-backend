export interface IDeleteCultivationUseCase {
  execute(producerId: string, cultivationId: string): Promise<any>;
}

export const IDeleteCultivationUseCase = Symbol('IDeleteCultivationUseCase');
