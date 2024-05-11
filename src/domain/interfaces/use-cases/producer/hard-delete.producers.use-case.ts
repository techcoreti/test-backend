export interface IHardDeleteProducersUseCase {
  execute(id: string): Promise<any>;
}

export const IHardDeleteProducersUseCase = Symbol(
  'IHardDeleteProducersUseCase',
);
