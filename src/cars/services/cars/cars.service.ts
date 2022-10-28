import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/typeorm/entities/Car';
import { CreateCarParams, UpdateCarParams } from 'src/utils/CarTypes';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  findCars() {
    return this.carRepository.find({ relations: ['category'] });
  }

  findIdCar(id: number) {
    return this.carRepository.findOne({ where: { id } });
  }

  createCar(carDetails: CreateCarParams) {
    const newCar = this.carRepository.create({
      ...carDetails,
      createdAt: new Date(),
    });
    return this.carRepository.save(newCar);
  }

  updateCar(id: number, updateCarDetails: UpdateCarParams) {
    return this.carRepository.update({ id }, { ...updateCarDetails });
  }

  deleteCar(id: number) {
    return this.carRepository.delete({ id });
  }
}
