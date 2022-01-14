/* eslint-disable prettier/prettier */
import { CreateDateColumn, PrimaryColumn} from "typeorm";

export class BaseEntity {
	@PrimaryColumn()
	id: string;

	@CreateDateColumn({
		name: 'fechaRegistro',
		nullable: false,
		type: 'timestamp',
		default: 'now()',
	})
	creationDate: Date;
}