import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { IUpdateCultivation } from 'src/domain/entities/cultivation.entity';

export class UpdateCultivationDto implements IUpdateCultivation {
  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsString()
  name: string;

  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsString()
  description: string;

  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsNumber()
  areaArable: number;

  @IsNotEmpty({
    message: ({ property }) => {
      return MessagesErrors(property).isRequired;
    },
  })
  @IsBoolean()
  isActive: boolean;
}
