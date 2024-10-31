
import { MarcaEntity } from 'src/domain/entity/marca.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Marca } from './entity-marca';


@Entity()
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  ano: number;



  @ManyToOne(() => Marca, (marca) => marca.carros)
  marca: Marca;
  
}