import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { CnpjOrCpfConstraint } from 'src/commons/utils/document.constraint.util';
import { ICreateProducer } from 'src/domain/entities/producers.entity';

export class CreateProducersDto implements ICreateProducer {
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  nameProducer: string;

  @Transform(({ value }) => value.replace(/\D/g, ''))
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @Validate(CnpjOrCpfConstraint)
  document: string;

  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  nameRanch: string;

  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  county: string;

  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  state: string;

  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalHectareArea: number;

  @IsNumber()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalArableArea: number;

  @IsNumber()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalVegetationArea: number;
}
