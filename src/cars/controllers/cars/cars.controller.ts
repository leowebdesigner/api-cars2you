import { Body, Controller, Post } from '@nestjs/common';
import { CreateCarDto } from 'src/cars/Dtos/CreateCar.dto';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
