import { Test, TestingModule } from '@nestjs/testing';
import { CreateProducersMock } from 'test/mocks/create.producer.mock';
import { CreateProducersUseCase } from '../../use-cases/create.producers.use-case';
import { DeleteProducersUseCase } from '../../use-cases/hard-delete.producers.use-case';
import { UpdateProducersUseCase } from '../../use-cases/update.producers.use-case';
import { CreateProducersDto } from '../dtos/create.producer.dto';
import { ProducerController } from './producer.controller';

describe('ProducerController', () => {
  let appController: ProducerController;
  const data: CreateProducersDto = CreateProducersMock();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],
      providers: [
        CreateProducersUseCase,
        UpdateProducersUseCase,
        DeleteProducersUseCase,
      ],
    }).compile();

    appController = app.get<ProducerController>(ProducerController);
  });

  describe('root', () => {
    it('should not return exception', () => {
      expect(appController.create(data)).not.toThrow();
    });
  });
});
