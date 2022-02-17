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
    // FALTA AGREGAR FECHA Y VERIFICAR EL TOTAL

    if (this.venta.datosEnvio && this.venta.datosPago) {
      Swal.fire("Error", "Debes ingresar los datos de envío y de pago.", "error");
      return of(this.venta);
    }
    else {
      this.venta.carrito = CARRITO.slice(-1)[0];

      (VENTAS.length === 0) ? this.venta.id = 0 : this.venta.id = VENTAS.slice(-1)[0].id + 1;

      VENTAS.push(this.venta);

      CARRITO.pop();

      return of(this.venta);
    }
  }
}
