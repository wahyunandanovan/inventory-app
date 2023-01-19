import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { Products } from './products/products.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import Sales from './sales/sales.entity';
import { Users } from './users/user.entity';

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
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
