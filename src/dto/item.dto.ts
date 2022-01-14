import { CRUDDTO } from './crud.dto';

export class ItemDTO extends CRUDDTO {
  name: string;
  stock: number;
  price: number;
}
