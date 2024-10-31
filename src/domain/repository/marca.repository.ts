import { CreateMarcaDto } from "src/core/abstract/interfaces/create-carro-marca.dto";
import { UpdateMarcaDto } from "src/core/abstract/interfaces/update-carro-marca.dto";
import { Marca } from "src/infra/repositories/entitys/entity-marca";




export interface MarcaUsesCases {
    create(createMarcaDto: CreateMarcaDto): Promise<Marca>;
    findAll(): Promise<Marca[]>;
    findOne(id: number): Promise<Marca>;
    update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<Marca>;
    remove(id: number): Promise<void>;
  }