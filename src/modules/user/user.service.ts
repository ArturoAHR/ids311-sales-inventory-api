import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers = async (): Promise<User[]> => {
    return await this.userRepository.getAll();
  };

  createUser = async (userDto: UserDTO): Promise<User> => {
    return await this.userRepository.createUser(userDto);
  };

  getUser = async (id: string): Promise<User> => {
    return await this.userRepository.getUser(id);
  };

  updateUser = async (userDto: UserDTO): Promise<User> => {
    return await this.userRepository.updateUser(userDto);
  };

  deleteUser = async (id): Promise<User> => {
    return await this.userRepository.deleteUser(id);
  };
}
