import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrito } from 'src/app/class/carrito';
import { Producto } from 'src/app/class/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoapiService {

  carrito = new Carrito();
  productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProductData() {
    return this.productList.asObservable();
  }

  setProduct(producto: any) {
    this.carrito.productos.push(...producto);
    this.productList.next(producto);
  }

  addToCart(producto: any, cant: number) {
    const productoEnCarrito = this.carrito.productos.find((p: any) => p.id === producto.id)
    if (productoEnCarrito && productoEnCarrito.cantidad) {
      productoEnCarrito.cantidad += cant;

    } else {
      producto.cantidad = cant;
      this.carrito.productos.push(producto);

    }
    this.productList.next(this.carrito);
    this.getTotal();
  }

  getTotal() {
    let grandTotal = 0;
    this.carrito.productos.forEach((a: any) => {
      grandTotal += (a.precio * a.cantidad);
    })
    this.carrito.precioTotalProducto = grandTotal;
  }

  removeCarritoProduct(producto: Producto) {
    const index = this.carrito.productos.findIndex((p: any) => p.id === producto.id)
    this.carrito.productos.splice(index, 1)
    this.productList.next(this.carrito)
  }

  removeCarrito() {
    this.carrito.productos = []
    this.productList.next(this.carrito)
  }

  guardarCarrito() {
    console.log(this.carrito);
  }
}
