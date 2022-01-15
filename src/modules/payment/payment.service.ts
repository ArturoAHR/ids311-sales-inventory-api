import { Injectable } from '@nestjs/common';
import { PaymentDTO } from 'src/dto/payment.dto';
import { Payment } from 'src/entities/payment.entity';
import { PaymentRepository } from 'src/repositories/payment.repository';

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
