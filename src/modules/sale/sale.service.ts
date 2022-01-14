import { Injectable } from '@nestjs/common';
import { SaleDTO } from 'src/dto/sale.dto';
import { Sale } from 'src/entities/sale.entity';
import { SaleRepository } from 'src/repositories/sale.repository';

@Injectable()
export class SaleService {
  constructor(private readonly saleRepository: SaleRepository) {}

  getSales = async (): Promise<Sale[]> => {
    return await this.saleRepository.getAll();
  };

  getSale = async (id: string): Promise<Sale> => {
    return await this.saleRepository.getSale(id);
  };
}
