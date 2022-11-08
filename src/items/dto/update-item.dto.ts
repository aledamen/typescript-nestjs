import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  name: string;
  @IsNumber()
  price: number;
  description: string;
}
