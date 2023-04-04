import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Pagination } from 'src/db/pagination';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async findAll(pagination: Pagination) {
   return await this.prisma.product.findMany({
    'skip': pagination.getPage(),
    'take': parseInt(pagination.getSize().toString()),
    });
  }
}
