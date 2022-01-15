import { Injectable } from '@nestjs/common';
import { ReportDTO } from '../../dto/report.dto';
import { Sale } from '../../entities/sale.entity';
import { SaleRepository } from '../../repositories/sale.repository';

@Injectable()
export class SaleService {
  constructor(private readonly saleRepository: SaleRepository) {}

  getSales = async (): Promise<Sale[]> => {
    return await this.saleRepository.getAll();
  };

  getSale = async (id: string): Promise<Sale> => {
    return await this.saleRepository.getSale(id);
  };

  getSalesInDays = async (days: number): Promise<ReportDTO> => {
    return await this.saleRepository.getSalesInDays(days);
  };
}
