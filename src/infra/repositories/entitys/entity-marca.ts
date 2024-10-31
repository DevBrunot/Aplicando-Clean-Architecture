import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Carro } from "./entity-carro";

@Entity()
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Carro, carro => carro.marca)
  carros: Carro[];
}