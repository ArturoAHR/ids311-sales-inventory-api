import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReportDTO } from 'src/dto/report.dto';
import { SaleDTO } from 'src/dto/sale.dto';
import { Payment } from 'src/entities/payment.entity';
import { Sale } from 'src/entities/sale.entity';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  async getSales(): Promise<Sale[]> {
    return await this.saleService.getSales();
  }

  @Get('/:id')
  async getSale(@Param('id') id: string): Promise<Sale> {
    return await this.saleService.getSale(id);
  }

  @Get('/report/daily')
  async getDailySalesReport(): Promise<ReportDTO> {
    return await this.saleService.getSalesInDays(1);
  }

  @Get('/report/weekly')
  async getWeeklySalesReport(): Promise<ReportDTO> {
    return await this.saleService.getSalesInDays(7);
  }

  @Get('/report/monthly')
  async getMonthlySalesReport(): Promise<ReportDTO> {
    return await this.saleService.getSalesInDays(30);
  }
}
