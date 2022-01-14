import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { Payment } from 'src/entities/payment.entity';
import { Sale } from 'src/entities/sale.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, Payment, Sale, Item])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
