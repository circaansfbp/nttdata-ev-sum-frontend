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


  // Obtener un producto
  getProducto(id: number): Observable<Producto> {
     const producto = PRODUCTOS.filter(producto => producto.id == id)[0];
     return of(producto);
  }
  // Recuperar las categorías de un producto
  getCategorias(): Observable<any>{
    let values: any = new Set([]);

    PRODUCTOS.forEach(producto => {
      values.add(Object.entries(producto)[3][1]);
    });

    return of(values);
  }

  // Crear un producto
  createProducto(producto: Producto): Observable<Producto> {
    // Setea el ID autoincremental
    producto.id = PRODUCTOS.slice(-1)[0].id + 1;

    PRODUCTOS.push(producto);
    return of(PRODUCTOS.slice(-1)[0]);
  }

  // Actualizar un producto
  updateProducto(productoToUpdate: Producto): Observable<Producto[]>{
    PRODUCTOS.map((producto, index) => {
      if (Object.entries(producto) === Object.entries(productoToUpdate)) {
        producto.nombre = productoToUpdate.nombre;
        producto.precio = productoToUpdate.precio;
        producto.categoria = productoToUpdate.categoria;
        producto.descripcion = productoToUpdate.descripcion;
      }
    });

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
