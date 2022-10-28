import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/Category';
import {
  CreateCategoryParams,
  UpdateCategoryParams,
} from 'src/utils/Categorytypes';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findCategories() {
    return this.categoryRepository.find();
  }

  findIdCategory(id: number) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  createCategory(categoryDetails: CreateCategoryParams) {
    const newCategory = this.categoryRepository.create({
      ...categoryDetails,
      createdAt: new Date(),
    });
    return this.categoryRepository.save(newCategory);
  }

  updateCategory(id: number, updateCategoryDetails: UpdateCategoryParams) {
    return this.categoryRepository.update({ id }, { ...updateCategoryDetails });
  }

  deleteCategory(id: number) {
    return this.categoryRepository.delete({ id });
  }
}
