import { Sale } from 'src/entities/sale.entity';
import { SaleDTO } from './sale.dto';

export class ReportDTO {
  Days: number;
  totalAmount: number;
  sales: Sale[];
}
