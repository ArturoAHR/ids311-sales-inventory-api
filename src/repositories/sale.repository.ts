import { randomUUID } from 'crypto';
import { SaleDTO } from '../dto/sale.dto';
import { assign } from '../utils/object-manipulation';
import { EntityRepository, Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';

@EntityRepository(Sale)
export class SaleRepository extends Repository<Sale> {
  async getAll(): Promise<Sale[]> {
    return await this.createQueryBuilder('sales').getMany();
  }

  async createSale(saleDto: SaleDTO): Promise<Sale> {
    try {
      saleDto.id = randomUUID();
      const sale = new Sale();
      assign(sale, saleDto);
      await this.save(sale);
      return sale;
    } catch (error) {
      //log
      throw error;
    }
  }

  async getSale(id: string) {
    try {
      return await this.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      //log
      throw error;
    }
  }
}
