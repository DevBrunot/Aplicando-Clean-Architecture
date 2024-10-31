import { MarcaUsesCases } from 'src/domain/repository/marca.repository';
import { Injectable } from '@nestjs/common';
import { Marca } from './entitys/entity-marca';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from 'src/core/abstract/interfaces/create-carro-marca.dto';
import { UpdateMarcaDto } from 'src/core/abstract/interfaces/update-carro-marca.dto';

@Injectable()
export class MarcaRepositoryOrm implements MarcaUsesCases {
  constructor(
    
    @InjectRepository(Marca) private marcaRepository: Repository<Marca>,
  ) {}

  async create(createMarcaDto: CreateMarcaDto): Promise<Marca> {
    const marca = this.marcaRepository.create(createMarcaDto);
    return this.marcaRepository.save(marca);
  }

  findAll(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }

  findOne(id: number): Promise<Marca> {
    return this.marcaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<Marca> {
    await this.marcaRepository.update(id, updateMarcaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.marcaRepository.delete(id);
  }
}


