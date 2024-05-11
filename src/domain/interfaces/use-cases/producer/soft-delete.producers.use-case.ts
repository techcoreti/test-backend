export interface ISoftDeleteProducersUseCase {
  execute(id: string): Promise<any>;
}

export const ISoftDeleteProducersUseCase = Symbol(
  'ISoftDeleteProducersUseCase',
);
