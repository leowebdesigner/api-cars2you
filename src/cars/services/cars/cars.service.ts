import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/typeorm/entities/Car';
import { CreateCarParams } from 'src/utils/CarTypes';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  findCars() {
    return this.carRepository.find();
  }

  createCar(carDetails: CreateCarParams) {
    const newCar = this.carRepository.create({
      ...carDetails,
      createdAt: new Date(),
    });
    return this.carRepository.save(newCar);
  }
}
