import { Producto } from "./producto";



export class Carrito {

    id: number = 0;

    productos: Producto[] = [];

    cantidad: number = 0;

    precioTotalProducto: number = 0;

}