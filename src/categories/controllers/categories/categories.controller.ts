import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto } from 'src/categories/dtos/CreateCategory.dto';
import { UpdateCategoryDto } from 'src/categories/dtos/UpdateCategory.dto';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Get()
  async getCategories() {
    const categories = await this.categoryService.findCategories();
    return categories;
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Patch(':id')
  async updateCategoryById(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateCategoryDto: UpdateCategoryDto,
  ) {
    await this.categoryService.updateCategory(id, UpdateCategoryDto);
  }
}
