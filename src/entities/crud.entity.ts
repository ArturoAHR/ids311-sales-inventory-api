import { DeleteDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export class CRUDEntity extends BaseEntity {
  @DeleteDateColumn({
    name: 'fechaEliminacion',
    nullable: true,
    type: 'timestamp',
    default: null,
  })
  deletionDate?: string;
}
