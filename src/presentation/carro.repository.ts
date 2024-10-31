import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarroDto } from '../core/abstract/interfaces/create-carro-marca.dto';
import { UpdateCarroDto } from '../core/abstract/interfaces/update-carro-marca.dto';
import { Carro } from 'src/infra/repositories/entitys/entity-carro';

@Injectable() 
export class CarroRepository {
  constructor(
    @InjectRepository(Carro)
    private readonly carroRepository: Repository<Carro>,
  ) {}

  create(createCarroDto: CreateCarroDto) {
    const carro = this.carroRepository.create(createCarroDto);
    return this.carroRepository.save(carro);
  }

  findAll() {
    return this.carroRepository.find();
  }

  findOne(id: number) {
    return this.carroRepository.findOne({ where: { id } }); 
  }

  update(id: number, updateCarroDto: UpdateCarroDto) {
    return this.carroRepository.update(id, updateCarroDto);
  }

  remove(id: number) {
    return this.carroRepository.delete(id);
  }
}
