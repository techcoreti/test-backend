import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { CnpjOrCpfConstraint } from 'src/commons/utils/document.constraint.util';
import { ICreateProducer } from 'src/domain/entities/producers.entity';

export class CreateProducersDto implements ICreateProducer {
  @ApiProperty({
    example: 'Producer Test II',
    description: 'Nome do produtor.',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  nameProducer: string;

  @ApiProperty({
    example: '00.000.000/0000-00',
    description: 'Número do CPF ou CNPJ.',
    type: 'string',
    required: true,
  })
  @Transform(({ value }) => value.replace(/\D/g, ''))
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @Validate(CnpjOrCpfConstraint)
  document: string;

  @ApiProperty({
    example: 'Ranch test',
    description: 'Nome da Fazenda.',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  nameRanch: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Nome da Cidade.',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  county: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado.',
    type: 'string',
    required: true,
    maxLength: 2,
  })
  @IsString()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @MaxLength(2)
  state: string;

  @ApiProperty({
    example: 90,
    description: 'Tamanho da fazenda em hectares.',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalHectareArea: number;

  @ApiProperty({
    example: 80,
    description: 'Tamanho da área de plantação na fazenda em hectares.',
    type: 'string',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalArableArea: number;

  @ApiProperty({
    example: 20,
    description: 'Tamanho da vegetação na fazenda em hectares.',
    type: 'string',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  totalVegetationArea: number;
}
