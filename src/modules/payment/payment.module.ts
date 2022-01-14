import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { PaymentRepository } from 'src/repositories/payment.repository';
import { Sale } from 'src/entities/sale.entity';
import { Item } from 'src/entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRepository, User, Sale, Item])],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
