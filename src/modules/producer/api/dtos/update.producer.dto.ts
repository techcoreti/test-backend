import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IUpdateProducer } from 'src/domain/entities/producers.entity';

export class UpdateProducersDto implements IUpdateProducer {
  @ApiProperty({
    example: 'Producer Test II',
    description: 'Nome do produtor.',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nameProducer: string;

  @ApiProperty({
    example: 'Ranch test',
    description: 'Nome da Fazenda.',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nameRanch: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Nome da Cidade.',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  county: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado.',
    type: 'string',
    required: false,
    maxLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  state: string;

  @ApiProperty({
    example: 90,
    description: 'Tamanho da fazenda em hectares.',
    type: 'string',
    required: false,
  })
  @IsNotEmpty()
  @IsOptional()
  totalHectareArea: number;

  @ApiProperty({
    example: 80,
    description: 'Tamanho da área de plantação na fazenda em hectares.',
    type: 'string',
    required: false,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  totalArableArea: number;

  @ApiProperty({
    example: 20,
    description: 'Tamanho da vegetação na fazenda em hectares.',
    type: 'string',
    required: false,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  totalVegetationArea: number;

  @ApiProperty({
    example: true,
    description: 'Define se o cadastro está ativo.',
    type: 'boolean',
    required: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isActive: boolean;
}
