import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = (): Promise<User[]> => {
    return this.userRepository.getUsers();
  };
}
