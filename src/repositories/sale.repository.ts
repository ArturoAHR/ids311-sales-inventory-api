import { randomUUID } from 'crypto';
import { SaleDTO } from '../dto/sale.dto';
import { assign } from '../utils/object-manipulation';
import { Between, EntityRepository, Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';
import { ReportDTO } from '../dto/report.dto';

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

  async getSalesInDays(days: number): Promise<ReportDTO> {
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    console.log(startDate, endDate);
    const report = new ReportDTO();
    report.totalAmount = 0;
    report.Days = days;
    const sales = await this.find({
      where: {
        creationDate: Between(startDate.toISOString(), endDate.toISOString()),
      },
    });

    // ('sales')
    //   .andWhere(`sales.fechaRegistro BETWEEN ${startDate} AND ${endDate}`)
    //   .getMany();
    sales.forEach((sale) => {
      report.totalAmount += Number(sale.price);
    });
    report.sales = { ...sales };
    return report;
  }
}
