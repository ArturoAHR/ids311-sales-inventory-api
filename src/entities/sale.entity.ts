import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';
import { Payment } from './payment.entity';

@Entity('ventas')
export class Sale extends BaseEntity {
  @ManyToOne(() => Payment, (payment) => payment.id, {})
  @JoinColumn({ name: 'idPago' })
  payment: Payment;

  @ManyToOne(() => Item, (item) => item.id, {})
  @JoinColumn({ name: 'idItem' })
  item: Item;

  @Column({ name: 'cantidad', type: 'numeric' })
  quantity: number;

  @Column({ name: 'precio', type: 'numeric' })
  price: number;
}
