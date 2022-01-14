import { IsUUID } from 'class-validator';
import { BaseDTO } from './base.dto';

export class PaymentDTO extends BaseDTO {
  @IsUUID()
  idUser: string;
  amount: number;
}
