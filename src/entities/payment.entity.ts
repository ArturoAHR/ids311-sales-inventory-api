import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Sale } from './sale.entity';
import { User } from './user.entity';

@Entity('pagos')
export class Payment extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id, {})
  @JoinColumn({ name: 'idUsuario', referencedColumnName: 'id' })
  user: User;

  @Column({ name: 'montoTotal', type: 'numeric' })
  amount: number;

  @OneToMany(() => Sale, (sale) => sale.payment, {})
  sales: Sale[];
}
