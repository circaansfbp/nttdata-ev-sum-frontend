import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../class/producto';

@Pipe({
  name: 'filtroPaginacion'
})
export class FiltroPaginacionPipe implements PipeTransform {

  transform(productos: Producto[], page: number = 0, search: string = ''): Producto[] {
    if (search.length == 0) {
      return productos.slice(page, page + 4);
    }
    
    const productosFiltrados = productos.filter(pro => pro.nombre.toLowerCase().includes(search));
    return productosFiltrados.slice(page, page + 4);
  }

}
