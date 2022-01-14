import { CRUDDTO } from './crud.dto';

export class UserDTO extends CRUDDTO {
  firstName: string;
  lastName: string;
  birthDate: Date;
}
