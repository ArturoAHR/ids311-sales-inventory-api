import { randomUUID } from 'crypto';
import { PaymentDTO } from 'src/dto/payment.dto';
import { assign } from 'src/utils/object-manipulation';
import { EntityRepository, Repository } from 'typeorm';
import { Payment } from '../entities/payment.entity';

@EntityRepository(Payment)
export class PaymentRepository extends Repository<Payment> {
  async getAll(): Promise<Payment[]> {
    return await this.createQueryBuilder('payments').getMany();
  }

  async getPayment(id: string) {
    try {
      return await this.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      //log
      throw error;
    }
  }

  async createPayment(paymentDto: PaymentDTO): Promise<Payment> {
    paymentDto.id = randomUUID();
    const payment = new Payment();
    assign(payment, paymentDto);
    await this.save(payment);
    return payment;
  }
}
