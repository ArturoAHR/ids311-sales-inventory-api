import { randomUUID } from 'crypto';
import { UserDTO } from 'src/dto/user.dto';
import { assign } from 'src/utils/object-manipulation';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getAll(): Promise<User[]> {
    return await this.createQueryBuilder('users')
      .where('users.fechaEliminacion is null')
      .getMany();
  }

  async createUser(userDto: UserDTO): Promise<User> {
    userDto.id = randomUUID();
    const user = new User();
    assign(user, userDto);
    await this.save(user);
    return user;
  }

  async getUser(id: string) {
    try {
      return await this.findOneOrFail({
        where: { id: id, deletionDate: null },
      });
    } catch (error) {
      //log
      throw error;
    }
  }

  async updateUser(userDto: UserDTO): Promise<User> {
    try {
      const user = await this.getUser(userDto.id);
      assign(user, userDto);
      await this.save(user);
      return user;
    } catch (error) {
      //log
      throw error;
    }
  }

  async deleteUser(id: string): Promise<User> {
    const userDto = new UserDTO();
    userDto.id = id;
    userDto.deletionDate = new Date();
    return await this.updateUser(userDto);
  }
}
