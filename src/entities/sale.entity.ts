import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Item } from './item.entity';
import { Payment } from './payment.entity';

@Entity('ventas')
export class Sale extends BaseEntity {
  @ManyToOne(() => Payment, (payment) => payment.id, {})
  @Column({ name: 'idPago', type: 'uuid' })
  payment: Payment;

  @ManyToOne(() => Item, (item) => item.id, {})
  @Column({
    name: 'idItem',
    type: 'uuid',
  })
  item: Item;

  @Column({ name: 'cantidad', type: 'numeric' })
  quantity: number;

  @Column({ name: 'precio', type: 'numeric' })
  price: number;
}
