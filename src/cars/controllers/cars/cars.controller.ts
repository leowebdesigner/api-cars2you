import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  async getCarById(@Param('id', ParseIntPipe) id: number) {
    const cars = await this.carService.findIdCar(id);
    if (cars) {
      return cars;
    } else {
      throw new NotFoundException('Carro não existe');
    }
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
