import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { Payment } from 'src/entities/payment.entity';
import { User } from 'src/entities/user.entity';
import { SaleRepository } from 'src/repositories/sale.repository';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([SaleRepository, Payment, Item, User])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
