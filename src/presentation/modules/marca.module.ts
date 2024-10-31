import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from "../../infra/repositories/entitys/entity-marca";
import { MarcaController } from "../controller/marcas.controller";
import { MarcaRepository } from "src/presentation/marca.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Marca])],
    controllers: [MarcaController],
    providers: [
        
        MarcaRepository,
    ],
})
export class MarcaModule {}
