import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isCNPJ, isCPF } from 'validation-br';
import { MessagesErrors } from '../constants/messages.errors';

@ValidatorConstraint({ name: 'CnpjOrCpfConstraint', async: false })
export class CnpjOrCpfConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return value.length < 12 ? this.isCpf(value) : this.isCnpj(value);
  }

  private isCnpj(value: string) {
    if (isCNPJ(value)) {
      return true;
    }
  }

  private isCpf(value: string) {
    if (isCPF(value)) {
      return true;
    }
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return MessagesErrors(validationArguments.property).documentNumberInvalid;
  }
}
