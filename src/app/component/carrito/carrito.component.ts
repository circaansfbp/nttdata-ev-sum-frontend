import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  allProductos: any = 0;

  constructor(private cartApi: CarritoapiService,
    private router: Router) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.productos = res.productos;
      this.allProductos = res.precioTotalProducto;
    });
  }

  removeProduct(producto: any) {
    this.cartApi.removeCarritoProduct(producto);
  }

  removeAllProduct() {
    this.cartApi.removeCarrito();
  }

  // Para manejar el pago
  payment(): void {
    // Calcular la cantidad de productos
    let cantidad = 0;

    if (this.productos) {
      this.productos.forEach((producto: any) => cantidad += producto.cantidad);

      this.cartApi.payment(cantidad).subscribe(
        data => {
          if (data) {
            swal.fire("Productos agregados!", "Ahora, ingresa los datos solicitados para gestionar el envío", "success");
            this.router.navigate(['/venta']);
          }
        }
      );
    } 
    else swal.fire("No existen productos!", "Primero, debes agregar productos al carrito.", "warning");
  }
}
