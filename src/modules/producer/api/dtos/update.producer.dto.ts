import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IUpdateProducer } from 'src/domain/entities/producers.entity';

export class UpdateProducersDto implements IUpdateProducer {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nameProducer: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nameRanch: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  county: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  state: string;

  @IsNotEmpty()
  @IsOptional()
  totalHectareArea: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  totalArableArea: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  totalVegetationArea: number;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isActive: boolean;
}
