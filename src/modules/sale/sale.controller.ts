import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
}
