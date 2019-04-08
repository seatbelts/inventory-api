import { Controller, Body, Post, Get, Delete, Param, Patch } from '@nestjs/common';

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

    @Patch(':id')
    async updateItem(@Param('id') id: string, @Body() updatedItem: Item) {
        return this.itemsService.updateItem(id, updatedItem);
    }

    @Delete(':id')
    async removeItem(@Param('id') itemId: string) {
        return this.itemsService.removeItem({ id: itemId });
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }
}
