import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarrosController } from "../controller/carros.controller";

import { Carro } from "../../infra/repositories/entitys/entity-carro"; 
import { Marca } from "../../infra/repositories/entitys/entity-marca"; 
import {  CarroRepository } from "src/presentation/carro.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Carro, Marca])],
  providers: [
    CarroRepository,
   
  ],
  controllers: [CarrosController],
 
})
export class CarrosModule {}
