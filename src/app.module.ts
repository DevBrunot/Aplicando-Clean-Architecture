import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarrosModule } from './presentation/modules/carros.module';
import { MarcaModule } from './presentation/modules/marca.module';
import { Carro } from './infra/repositories/entitys/entity-carro';
import { Marca } from './infra/repositories/entitys/entity-marca';

@Module({
  imports: [
  
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'carrosdb',
      entities: [Carro,Marca],
      synchronize: true,  
    }),
    CarrosModule,
    MarcaModule,
  ],
})
export class AppModule {}