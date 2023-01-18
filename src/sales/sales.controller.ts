import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Crud({
  model: {
    type: Sales,
  },
})
@ApiTags('sales')
@Controller('sales')
export class SalesController implements CrudController<Sales> {
  constructor(public service: SalesService) {}
}
