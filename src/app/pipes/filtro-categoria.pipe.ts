import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoProductos = [];
    for (const producto of value) {
      if (producto.categoria.toLowerCase().(arg.toLowerCase()) > -1) {
        resultadoProductos.push(producto);

      };
    };
    return resultadoProductos;
  }

}
