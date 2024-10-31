import { CreateCarroDto } from "src/core/abstract/interfaces/create-carro-marca.dto";
import { CarroEntity } from "../entity/carro.entity";
import { UpdateCarroDto } from "src/core/abstract/interfaces/update-carro-marca.dto";
import { Carro } from "src/infra/repositories/entitys/entity-carro";

export interface CarroUsesCases {
    create(createCarroDto: CreateCarroDto): Promise<Carro>;
    findAll(): Promise<Carro[]>;
    findOne(id: number): Promise<Carro>;
    update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro>;
    remove(id: number): Promise<void>;
  }