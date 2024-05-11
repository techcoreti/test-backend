import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MessagesErrors } from 'src/commons/constants/messages.errors';
import { ICreateCultivation } from 'src/domain/entities/cultivation.entity';

export class CreateCultivationDto implements ICreateCultivation {
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
}
