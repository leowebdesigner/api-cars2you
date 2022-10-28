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
} from '@nestjs/common';
import { CreateCarDto } from 'src/cars/dtos/CreateCar.dto';
import { UpdateCarDto } from 'src/cars/dtos/UpdateCar.dto';
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

  @Patch(':id')
  async updateCarById(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateCarDto: UpdateCarDto,
  ) {
    await this.carService.updateCar(id, UpdateCarDto);
  }

  @Delete(':id')
  async deleteCarById(@Param('id', ParseIntPipe) id: number) {
    await this.carService.deleteCar(id);
  }
}
