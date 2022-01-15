import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../../entities/item.entity';
import { Payment } from '../../entities/payment.entity';
import { User } from '../../entities/user.entity';
import { SaleRepository } from '../../repositories/sale.repository';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([SaleRepository, Payment, Item, User])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
