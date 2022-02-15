import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTOS } from './producto.json';
import { Producto } from 'src/app/class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  // Listar productos
  getProductos(): Observable<Producto[]> {
    return of(PRODUCTOS);
  }

  // Eliminar un producto
  deleteProducto(idProducto: number): Observable<Producto[]> {
    const index = PRODUCTOS.indexOf(
      PRODUCTOS.filter(producto => producto.id === idProducto)[0]
    );

    PRODUCTOS.splice(index, 1);

    return of(PRODUCTOS);
  }
}
