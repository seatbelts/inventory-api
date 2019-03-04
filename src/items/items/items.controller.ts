import { Controller, Body, Post, Get } from '@nestjs/common';

import { ItemsService } from './items.service';

import { Item } from 'src/items/entities/item.entity';

@Controller('items')
export class ItemsController {

    constructor(private itemsService: ItemsService) {}

    @Post()
    async create(@Body() createItem: Item) {
        this.itemsService.create(createItem);
    }

    @Post('/batch')
    async createBatch(@Body() createItemArray: Item[]) {
        this.itemsService.batchCreate(createItemArray);
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }
}
