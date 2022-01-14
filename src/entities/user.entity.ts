import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CRUDEntity } from './crud.entity';
import { Payment } from './payment.entity';

@Entity('usuarios')
export class User extends CRUDEntity {
  @Column({ name: 'nombre', type: 'varchar' })
  firstName: string;

  @Column({ name: 'apellido', type: 'varchar' })
  lastName: string;

  @Column({ name: 'fechaNacimiento', type: 'varchar' })
  birthDate: string;

  @OneToMany(() => Payment, (payment) => payment.user, {})
  payments: Payment[];
}
