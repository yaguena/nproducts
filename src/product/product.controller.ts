import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Pagination } from 'src/db/pagination';

@Controller('products')
export class ProductController {

  constructor(private productService: ProductService) {}

  @Get()
  async findAll(@Query('page') page:number = 1, @Query('size') size: number = 10) {
    const pagination = new Pagination(page, size);
    return await this.productService.findAll(pagination);
  }
}
