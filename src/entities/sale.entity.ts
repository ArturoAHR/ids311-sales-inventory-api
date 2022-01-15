import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';
import { Payment } from './payment.entity';

@Entity('ventas')
export class Sale extends BaseEntity {
  @Column({ name: 'idPago', type: 'uuid' })
  idPayment: string;

  @Column({ name: 'idItem', type: 'uuid' })
  idItem: Item;

  @Column({ name: 'cantidad', type: 'numeric' })
  quantity: number;

  @Column({ name: 'precio', type: 'numeric' })
  price: number;

  @ManyToOne(() => Payment, { nullable: false, eager: true })
  @JoinColumn({ name: 'idPago' })
  payment: Payment;

  @ManyToOne(() => Item, { nullable: false, eager: true })
  @JoinColumn({ name: 'idItem' })
  item: Item;
}
