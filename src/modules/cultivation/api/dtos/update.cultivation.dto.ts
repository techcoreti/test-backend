import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { IUpdateCultivation } from 'src/domain/entities/cultivation.entity';

export class UpdateCultivationDto implements IUpdateCultivation {
  @ApiProperty({
    example: 'Algodão',
    description: 'Nome da cultura.',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Plantação de algodão',
    description: 'Informações adicionais da cultura.',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 390,
    description: 'Tamanho da área do plantio em hectares.',
    type: 'number',
    required: true,
  })
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsNumber()
  areaArable: number;

  @ApiProperty({
    example: true,
    description: 'Desabilita/habilita o registro.',
    type: 'boolean',
    required: true,
  })
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsBoolean()
  isActive: boolean;
}
