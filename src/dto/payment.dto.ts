import { IsUUID } from 'class-validator';
import { User } from 'src/entities/user.entity';
import { BaseDTO } from './base.dto';

export class PaymentDTO extends BaseDTO {
  @IsUUID()
  idUser: string;
  amount: number;
  user: User;
}
