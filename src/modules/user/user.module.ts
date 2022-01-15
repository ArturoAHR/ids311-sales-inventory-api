import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { Payment } from 'src/entities/payment.entity';
import { Sale } from 'src/entities/sale.entity';
import { ItemRepository } from 'src/repositories/item.repository';
import { PaymentRepository } from 'src/repositories/payment.repository';
import { SaleRepository } from 'src/repositories/sale.repository';
import { UserRepository } from 'src/repositories/user.repository';
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
