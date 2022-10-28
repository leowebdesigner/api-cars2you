import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/Category';
import { CreateCategoryParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findCategories() {}

  createCategory(categoryDetails: CreateCategoryParams) {
    const newCategory = this.categoryRepository.create({
      ...categoryDetails,
      createdAt: new Date(),
    });
    return this.categoryRepository.save(newCategory);
  }
}
