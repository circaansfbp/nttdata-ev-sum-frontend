import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/class/carrito';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { VentaService } from 'src/app/service/venta/venta.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:Producto[]=[]
  allProductos:any=0;
  constructor(private cartApi:CarritoapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.productos=res.productos;
      this.allProductos=res.precioTotalProducto;
      console.log(res)
    })

  }

  removeProduct(producto: any) {
    this.cartApi.removeCarritoProduct(producto);
  }

  removeAllProduct() {
    this.cartApi.removeCarrito();
  }
  
  saveCarrito(){
    this.cartApi.guardarCarrito()
  }

  // Para manejar el pago
  payment(): void {
    // Calcular la cantidad de productos y el total
    let cantidad = 0;
    let total = 0;

    this.productos.forEach((producto: any) => {
      // Cantidad
      cantidad += producto.cantidad;

      // Precio
      total += producto.precio * producto.cantidad;
    });

    this.ventaService.payment(this.carrito, cantidad, total).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
