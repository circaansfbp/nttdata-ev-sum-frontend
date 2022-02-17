import { Carrito } from "./carrito";
import { Envio } from "./envio";

export class Venta {
    id: number = 0;
    fechaVenta: string = '';
    totalVenta: number = 0;
    carrito: Carrito[] = []; 
    datosEnvio: Envio = new Envio();
}