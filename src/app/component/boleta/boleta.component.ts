import { Component, OnDestroy, OnInit } from '@angular/core';
import { Venta } from 'src/app/class/venta';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { VENTAS } from 'src/app/service/venta/venta.json';
import { VentaService } from 'src/app/service/venta/venta.service';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit, OnDestroy {

  venta: Venta = VENTAS.slice(-1)[0];

  constructor( private ventaService: VentaService,
               private carritoService: CarritoapiService ) { }

  ngOnInit(): void { }
  
  ngOnDestroy(): void {
    this.reset();
  }

  reset() {
    this.ventaService.resetVenta();
    this.carritoService.removeCarrito();
  }

}
