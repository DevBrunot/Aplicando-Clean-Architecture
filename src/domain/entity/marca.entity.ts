import { CarroEntity } from "./carro.entity";



export class MarcaEntity {
    id: number;
    nome: string;
    carros: CarroEntity[];
  }