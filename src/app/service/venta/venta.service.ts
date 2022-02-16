import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carrito } from 'src/app/class/carrito';
import { CARRITO } from '../carrito/carrito.json';
import { PRODUCTOS } from '../producto/producto.json';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor() { }

  // payment(carrito: Carrito, cantidadProductos: number, total: number): Observable<any> {
  //   carrito.id = PRODUCTOS.length === 0 ? 1 : PRODUCTOS.slice(-1)[0].id;
  //   carrito.cantidad = cantidadProductos;
  //   carrito.precioTotalProducto = total;

  //   CARRITO.push(carrito);

  //   return of(CARRITO);
  // }
}
