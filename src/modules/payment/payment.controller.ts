import { Controller, Get, Param } from '@nestjs/common';
import { Payment } from '../../entities/payment.entity';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async getPayments(): Promise<Payment[]> {
    return await this.paymentService.getPayments();
  }

  @Get('/:id')
  async getPayment(@Param('id') id: string): Promise<Payment> {
    return await this.paymentService.getPayment(id);
  }
}
