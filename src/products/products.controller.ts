import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Crud({
  model: {
    type: Products,
  },
})
@ApiTags('products')
@Controller('products')
export class ProductsController implements CrudController<Products> {
  constructor(public service: ProductsService) {}
}
