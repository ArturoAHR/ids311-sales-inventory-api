import { Injectable } from '@nestjs/common';
import { ItemDTO } from '../../dto/item.dto';
import { Item } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}

  getItems = async (): Promise<Item[]> => {
    return await this.itemRepository.getAll();
  };

  createItem = async (itemDto: ItemDTO): Promise<Item> => {
    return await this.itemRepository.createItem(itemDto);
  };

  getItem = async (id: string): Promise<Item> => {
    return await this.itemRepository.getItem(id);
  };

  updateItem = async (itemDto: ItemDTO): Promise<Item> => {
    return await this.itemRepository.updateItem(itemDto);
  };

  deleteItem = async (id: string): Promise<Item> => {
    return await this.itemRepository.deleteItem(id);
  };
}
