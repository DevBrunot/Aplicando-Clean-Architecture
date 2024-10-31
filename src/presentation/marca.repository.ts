import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMarcaDto } from '../core/abstract/interfaces/create-carro-marca.dto';
import { UpdateMarcaDto } from '../core/abstract/interfaces/update-carro-marca.dto';
import { Marca } from 'src/infra/repositories/entitys/entity-marca';

@Injectable() 
export class MarcaRepository {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}

  create(createMarcaDto: CreateMarcaDto) {
    const marca = this.marcaRepository.create(createMarcaDto);
    return this.marcaRepository.save(marca);
  }

  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id: number) {
    return this.marcaRepository.findOne({ where: { id } }); 
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update(id, updateMarcaDto);
  }

  remove(id: number) {
    return this.marcaRepository.delete(id);
  }
}
