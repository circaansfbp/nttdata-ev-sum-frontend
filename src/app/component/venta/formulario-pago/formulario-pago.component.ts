import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/class/pago';
import { VentaService } from 'src/app/service/venta/venta.service';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css']
})
export class FormularioPagoComponent implements OnInit {

  pago: Pago = new Pago();

  modificarDatosPago: boolean = false;

  constructor( private ventaService: VentaService ) { }

  ngOnInit(): void {
  }

  registrarDatosPago() {
    this.modificarDatosPago = !this.modificarDatosPago
    
    this.ventaService.addPago(this.pago);
  }

  updateDatos() {
    this.modificarDatosPago = !this.modificarDatosPago;
  }
}
