import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '../../entities/payment.entity';
import { Sale } from '../../entities/sale.entity';
import { User } from '../../entities/user.entity';
import { ItemRepository } from '../../repositories/item.repository';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository, Payment, Sale, User])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
