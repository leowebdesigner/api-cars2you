import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/typeorm/entities/Car';
import { Category } from 'src/typeorm/entities/Category';
import { CarsController } from './controllers/cars/cars.controller';
import { CarsService } from './services/cars/cars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Category])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
