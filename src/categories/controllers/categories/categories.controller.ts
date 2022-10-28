import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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

  @Get(':id')
  async getCategoryById(@Param('id', ParseIntPipe) id: number) {
    const categories = await this.categoryService.findIdCategory(id);
    if (categories) {
      return categories;
    } else {
      throw new NotFoundException('Categoria não existe');
    }
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

  @Delete(':id')
  async deleteCategoryById(@Param('id', ParseIntPipe) id: number) {
    await this.categoryService.deleteCategory(id);
  }
}
