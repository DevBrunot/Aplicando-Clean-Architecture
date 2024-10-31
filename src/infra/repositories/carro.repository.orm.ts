import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carro } from './entitys/entity-carro';
import { CreateCarroDto } from 'src/core/abstract/interfaces/create-carro-marca.dto';
import { UpdateCarroDto } from 'src/core/abstract/interfaces/update-carro-marca.dto';
import {  CarroUsesCases } from 'src/domain/repository/carro.repository';

@Injectable()
export class CarroRepositoryOrm implements CarroUsesCases {
  constructor(
    @InjectRepository(Carro) private carroRepository: Repository<Carro>,

  ) {}

  async create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const carro = this.carroRepository.create(createCarroDto);
    return this.carroRepository.save(carro);
  }

  async findAll(): Promise<Carro[]> {
    return this.carroRepository.find({ relations: ['marca'] });
  }

  async findOne(id: number): Promise<Carro> {
    const carro = await this.carroRepository.findOne({ where: { id }, relations: ['marca'] });
    if (!carro) {
      throw new NotFoundException(`Carro com ID ${id} não encontrado`);
    }
    return carro;
  }

  async update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro> {
    const carro = await this.findOne(id);
    Object.assign(carro, updateCarroDto);
    return this.carroRepository.save(carro);
  }

  async remove(id: number): Promise<void> {
    const carro = await this.findOne(id);
    await this.carroRepository.remove(carro);
  }
}
