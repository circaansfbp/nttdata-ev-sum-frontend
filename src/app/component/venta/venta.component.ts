import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/class/venta';
import { CARRITO } from 'src/app/service/carrito/carrito.json';
import { VentaService } from 'src/app/service/venta/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  total: number = CARRITO.slice(-1)[0]?.precioTotalProducto;

  constructor(private router: Router,
    private ventaService: VentaService) { }

  ngOnInit(): void {
  }

  // Finalizar la compra
  buy() {
    this.ventaService.buy().subscribe(
      data => {
        if (data) {
          console.log(data);
          Swal.fire("Compra finalizada!", "Su compra ha sido recibida y registrada correctamente.", "success");
          // REDIRECCIONAR A LA BOLETA
        }
      }
    )
  }

  cancelarCompra() {
    this.router.navigate(['/carrito']);
  }
}
