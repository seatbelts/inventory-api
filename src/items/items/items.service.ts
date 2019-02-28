import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Item } from '../interfaces/items';
import { CreateItemDto } from '../dto/create.items.dto';

@Injectable()
export class ItemsService {

    constructor(
        @Inject('ItemModelToken')
        private readonly itemModel: Model<Item>,
    ) {}

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const createdItem = new this.itemModel(createItemDto);
        return await createdItem.save();
    }

    async batchCreate(createItemDtoArray: CreateItemDto[]): Promise<Item[]> {
        const createItemsPromise = await createItemDtoArray.map(createItemDto => {
            const createdItem = new this.itemModel(createItemDto);
            return createdItem.save();
        });
        return createItemsPromise;
    }

    async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
    }
}
