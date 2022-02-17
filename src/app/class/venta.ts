import { Carrito } from "./carrito";

export class Venta {
    id: number = 0;
    fechaVenta: string = '';
    totalVenta: number = 0;
    carrito: Carrito[] = []; 
}