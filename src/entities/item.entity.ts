import { Entity, Column, BaseEntity, OneToMany } from 'typeorm';
import { CRUDEntity } from './crud.entity';
import { Sale } from './sale.entity';

@Entity('items')
export class Item extends CRUDEntity {
  @Column({ name: 'nombre', type: 'varchar' })
  name: string;

  @Column({ name: 'existencias', type: 'numeric' })
  stock: number;

  @Column({ name: 'precio', type: 'numeric' })
  price: number;

  @OneToMany(() => Sale, (sale) => sale.item, {})
  sales: Sale[];
}
