import { IsUUID } from 'class-validator';
import { Item } from 'src/entities/item.entity';
import { Payment } from 'src/entities/payment.entity';
import { BaseDTO } from './base.dto';

export class SaleDTO extends BaseDTO {
  @IsUUID()
  idPayment: string;
  @IsUUID()
  idItem: string;
  quantity: number;
  price: number;
  payment: Payment;
  item: Item;
}
