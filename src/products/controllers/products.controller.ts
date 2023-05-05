import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productService.upadte(id, payload);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
