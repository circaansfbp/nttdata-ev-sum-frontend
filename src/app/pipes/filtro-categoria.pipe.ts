import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../class/producto';

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {

 
  transform(productos: Producto[], search:string =''): Producto[] {
    if(search.length==0){
      return productos;
    }
    console.log(search)
    const resultadoProductos = [];
    for (const producto of productos) {
      if (producto.categoria.toLowerCase().indexOf(search.toLowerCase()) > -1) {
        resultadoProductos.push(producto);
        console.log(producto)
      };
    };
    return resultadoProductos;
  }

}
