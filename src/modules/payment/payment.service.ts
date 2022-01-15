import { Injectable } from '@nestjs/common';
import { Payment } from '../../entities/payment.entity';
import { PaymentRepository } from '../../repositories/payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  getPayments = async (): Promise<Payment[]> => {
    return await this.paymentRepository.getAll();
  };

  getPayment = async (id: string): Promise<Payment> => {
    return await this.paymentRepository.getPayment(id);
  };
}
