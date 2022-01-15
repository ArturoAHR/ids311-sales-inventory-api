import { Sale } from '../entities/sale.entity';

export class ReportDTO {
  Days: number;
  totalAmount: number;
  sales: Sale[];
}
