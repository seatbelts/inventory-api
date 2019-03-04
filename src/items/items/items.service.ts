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

    async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
    }
}
