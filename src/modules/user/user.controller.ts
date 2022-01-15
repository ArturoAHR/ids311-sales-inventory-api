import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SalesDTO } from 'src/dto/sales.dto';
import { UserDTO } from 'src/dto/user.dto';
import { Payment } from 'src/entities/payment.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() userDto: UserDTO): Promise<User> {
    return await this.userService.createUser(userDto);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: UserDTO,
  ): Promise<User> {
    userDto.id = id;
    return await this.userService.updateUser(userDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userService.deleteUser(id);
  }

  @Post('/:id/payment')
  async createUserPayment(
    @Param('id') id: string,
    @Body() salesDto: SalesDTO,
  ): Promise<Payment> {
    return await this.userService.createUserPayment(id, salesDto);
  }
}
