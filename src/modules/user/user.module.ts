import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../../entities/item.entity';
import { Payment } from '../../entities/payment.entity';
import { Sale } from '../../entities/sale.entity';
import { ItemRepository } from '../../repositories/item.repository';
import { PaymentRepository } from '../../repositories/payment.repository';
import { SaleRepository } from '../../repositories/sale.repository';
import { UserRepository } from '../../repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      PaymentRepository,
      Payment,
      SaleRepository,
      Sale,
      ItemRepository,
      Item,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
