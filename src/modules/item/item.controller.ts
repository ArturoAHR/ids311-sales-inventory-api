import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDTO } from '../../dto/item.dto';
import { Item } from '../../entities/item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItems(): Promise<Item[]> {
    return await this.itemService.getItems();
  }

  @Post()
  async createItem(@Body() itemDto: ItemDTO): Promise<Item> {
    return await this.itemService.createItem(itemDto);
  }

  @Get('/:id')
  async getItem(@Param('id') id: string): Promise<Item> {
    return await this.itemService.getItem(id);
  }

  @Put('/:id')
  async updateItem(
    @Param('id') id: string,
    @Body() itemDto: ItemDTO,
  ): Promise<Item> {
    itemDto.id = id;
    return await this.itemService.updateItem(itemDto);
  }

  @Delete('/:id')
  async deleteItem(@Param('id') id: string): Promise<Item> {
    return await this.itemService.deleteItem(id);
  }
}
