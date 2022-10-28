import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCarDto } from 'src/cars/Dtos/CreateCar.dto';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}
  @Get()
  async getCategories() {
    const cars = await this.carService.findCars();
    return cars;
  }
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
