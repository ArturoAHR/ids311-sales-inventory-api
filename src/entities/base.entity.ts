/* eslint-disable prettier/prettier */
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({
		name: 'fechaRegistro',
		nullable: false,
		type: 'timestamp',
		default: 'now()',
	})
	creationDate: Date;
}