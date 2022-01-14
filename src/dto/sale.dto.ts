import { IsUUID } from 'class-validator';
import { BaseDTO } from './base.dto';

export class PaymentDTO extends BaseDTO {
  @IsUUID()
  idPayment: string;
  @IsUUID()
  idItem: string;
  quantity: number;
  price: number;
}
