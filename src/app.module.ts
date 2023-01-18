import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { Products } from './products/products.entity';
import { Sales } from './sales/sales.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'root',
      database: 'inventory',
      entities: [Users, Products, Sales],
      synchronize: true,
    }),
    ProductsModule,
    SalesModule,
    PurchasesModule,
    UsersModule,
  ],
})
export class AppModule {}
