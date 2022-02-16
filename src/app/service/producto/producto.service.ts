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


  // Obtener 1 producto
  getProducto(id: number): Observable<Producto> {
    const producto = PRODUCTOS.filter(producto => producto.id === id)[0];
    return of(producto);
  }
  // Recuperar las categorías de un producto
  // getCategorias(): Observable<Producto[]> {

  // }

  // Crear un producto
  createProducto(producto: Producto): Observable<Producto> {
    // Setea el ID autoincremental
    producto.id = PRODUCTOS.slice(-1)[0].id + 1;

    PRODUCTOS.push(producto);
    return of(PRODUCTOS.slice(-1)[0]);
  }

  // Eliminar un producto
  deleteProducto(idProducto: number): Observable<Producto[]> {
    const index = PRODUCTOS.indexOf(
      PRODUCTOS.filter(producto => producto.id === idProducto)[0]
    );

    PRODUCTOS.splice(index, 1);

    return of(PRODUCTOS);
  }

  // Actualizar un producto
  updateProducto(idProducto: number): Observable<any>{
    const producto = PRODUCTOS.filter(producto => producto.id === idProducto)[0];
    return of(producto)
  }


}
