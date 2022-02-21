import { Pipe, PipeTransform } from '@angular/core';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from '../service/producto/producto.service';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(productos: Producto[], page: number = 0): Producto[] {
    return productos.slice(page, page + 5);
  }

}
