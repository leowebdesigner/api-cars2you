import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/categories/dtos/CreateCategory.dto';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Get()
  getCategories() {}

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    this.categoryService.createCategory(createCategoryDto);
  }
}
