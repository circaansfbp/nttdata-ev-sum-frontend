import { Producto } from "./producto";

export class Carrito {
    id: number = 0;
    productos: Producto[] = [];
    cantidadProductos: number = 0;
    precioTotal: number = 0; 
}