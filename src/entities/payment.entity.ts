import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Sale } from './sale.entity';
import { User } from './user.entity';

@Entity('pagos')
export class Payment extends BaseEntity {
  @Column({ name: 'idUsuario', type: 'uuid' })
  idUser: string;

  @Column({ name: 'montoTotal', type: 'numeric' })
  amount: number;

  @OneToMany(() => Sale, (sale) => sale.payment, {})
  sales: Sale[];

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'idUsuario', referencedColumnName: 'id' })
  user: User;
}
