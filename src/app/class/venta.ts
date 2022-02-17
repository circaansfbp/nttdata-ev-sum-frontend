import { Carrito } from "./carrito";
import { Envio } from "./envio";
import { Pago } from "./pago";

export class Venta {
    id: number = 0;
    fechaVenta: string = '';
    totalVenta: number = 0;
    carrito: Carrito = new Carrito();
    datosEnvio!: Envio;
    datosPago!: Pago;
}