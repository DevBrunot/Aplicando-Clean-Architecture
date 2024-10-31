import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { CreateMarcaDto } from "src/core/abstract/interfaces/create-carro-marca.dto";
import { UpdateMarcaDto } from "src/core/abstract/interfaces/update-carro-marca.dto";
import { MarcaRepository } from "src/presentation/marca.repository";

@Controller('marcas')
export class MarcaController {
  constructor(private readonly marcaRepository: MarcaRepository) {}

  @Get()
  findAll() {
    return this.marcaRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcaRepository.findOne(+id);
  }

  @Post()
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaRepository.create(createMarcaDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update(+id, updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaRepository.remove(+id);
  }
}
