import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/typeorm/entities/Car';
import { Category } from 'src/typeorm/entities/Category';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Car])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
