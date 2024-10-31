import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCarroDto } from "src/core/abstract/interfaces/create-carro-marca.dto";
import { UpdateCarroDto } from "src/core/abstract/interfaces/update-carro-marca.dto";
import { CarroRepository } from "src/presentation/carro.repository";

@Controller('carros')
export class CarrosController {
  constructor(private readonly carroRepository: CarroRepository) {}

  @Get()
  findAll() {
    return this.carroRepository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundCarros = await this.carroRepository.findOne(+id);
    return foundCarros;

  }

  @Post()
  create(@Body() createCarroDto: CreateCarroDto) {
    return this.carroRepository.create(createCarroDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarroDto: UpdateCarroDto) {
    return this.carroRepository.update(+id, updateCarroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carroRepository.remove(+id);
  }
}
