import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Envio } from 'src/app/class/envio';
import { Pago } from 'src/app/class/pago';
import { Venta } from 'src/app/class/venta';
import Swal from 'sweetalert2';
import { CARRITO } from '../carrito/carrito.json';
import { VENTAS } from './venta.json';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  venta: Venta = new Venta();

  constructor() { }

  // Para añadir el envío
  addEnvio(datosEnvio: Envio) {
    this.venta.datosEnvio = datosEnvio;
  }
  
  // Para añadir el pago
  addPago(datosPago: Pago) {
    this.venta.datosPago = datosPago;
  }

  buy(): Observable<Venta> {
    if (CARRITO.length === 0) {
      Swal.fire("Error", "No existen productos en el carrito!", "error");
      return of(this.venta);
    }

    if (!this.venta.datosEnvio || !this.venta.datosPago) {
      Swal.fire("Error", "Debes ingresar los datos de envío y de pago.", "error");
      return of(this.venta);
    }

    // Para agregar la fecha de compra
    const today = new Date();
    const dia = String(today.getDate()).padStart(2, '0');
    const mes = String(today.getMonth() + 1).padStart(2, '0');
    const anio = String(today.getFullYear());
    this.venta.fechaVenta = `${dia}/${mes}/${anio}`;

    // Para agregar el carrito a la venta
    this.venta.carrito = CARRITO.slice(-1)[0];

    // Agrega el total a la venta
    this.venta.totalVenta = CARRITO.slice(-1)[0].precioTotalProducto;

    // Agrega el ID
    (VENTAS.length === 0) ? this.venta.id = 1 : this.venta.id = VENTAS.slice(-1)[0].id + 1;

    // Registra la venta y vacía el carrito
    VENTAS.push(this.venta);
    // CARRITO.pop();

    return of(this.venta);
  }

  resetVenta(): void {
    this.venta = new Venta();
  }
}
