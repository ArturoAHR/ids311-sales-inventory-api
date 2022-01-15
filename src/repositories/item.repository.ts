import { randomUUID } from 'crypto';
import { ItemDTO } from '../dto/item.dto';
import { assign } from '../utils/object-manipulation';
import { EntityRepository, Repository } from 'typeorm';
import { Item } from '../entities/item.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async getAll(): Promise<Item[]> {
    return await this.createQueryBuilder('items')
      .where('items.fechaEliminacion is null')
      .getMany();
  }

  async createItem(itemDto: ItemDTO): Promise<Item> {
    itemDto.id = randomUUID();
    const item = new Item();
    assign(item, itemDto);
    await this.save(item);
    return item;
  }

  async getItem(id: string) {
    try {
      return await this.findOneOrFail({
        where: { id: id, deletionDate: null },
      });
    } catch (error) {
      //log
      throw error;
    }
  }

  async updateItem(itemDto: ItemDTO): Promise<Item> {
    try {
      const item = await this.getItem(itemDto.id);
      assign(item, itemDto);
      await this.save(item);
      return item;
    } catch (error) {
      //log
      throw error;
    }
  }

  async deleteItem(id: string): Promise<Item> {
    const itemDto = new ItemDTO();
    itemDto.id = id;
    itemDto.deletionDate = new Date();
    return await this.updateItem(itemDto);
  }
}
