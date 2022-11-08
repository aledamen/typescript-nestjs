import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    //aca puedo ir injectando otros modelos que utilice
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = await this.itemsModule.create(createItemDto);
    return item;
  }

  async findAll() {
    const items = await this.itemsModule.find();
    return items;
  }

  async findOne(id: string) {
    const item = await this.itemsModule.findById({ _id: id });
    return item;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.itemsModule.updateOne({ _id: id }, updateItemDto);
    return item;
  }

  async remove(id: string) {
    const deleteItem = await this.itemsModule.deleteOne({ _id: id });
    return deleteItem;
  }
}
