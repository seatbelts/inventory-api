import { Controller, Body, Post, Get } from '@nestjs/common';

import { ItemsService } from './items.service';
import { Item } from '../interfaces/items';

import { CreateItemDto } from '../dto/create.items.dto';

@Controller('items')
export class ItemsController {

    constructor(private itemsService: ItemsService) {}

    @Post()
    async create(@Body() createItemDto: CreateItemDto) {
        this.itemsService.create(createItemDto);
    }

    @Post('/batch')
    async createBatch(@Body() createItemDtoArray: CreateItemDto[]) {
        console.log(createItemDtoArray);
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }
}
