import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from 'src/items/entities/item.entity';

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
    ) {}

    async create(createItem): Promise<Item> {
        return await this.itemRepository.save(createItem);
    }

    async batchCreate(createItemArray): Promise<Item[]> {
        const createItemsPromise = await createItemArray.map(createItem => {
            return this.itemRepository.save(createItem);
        });
        return createItemsPromise;
    }

    async findById(id: number): Promise<Item> {
        return await this.itemRepository.findOne(id);
    }

    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    async updateItem(itemId, updatedItem): Promise<Item> {
        await this.itemRepository.update(itemId, updatedItem);
        return this.findById(itemId);
    }

    async removeItem(itemId): Promise<any> {
        await this.itemRepository.remove(itemId);
        return await this.findAll();
    }
}
