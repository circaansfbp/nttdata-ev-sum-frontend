import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/class/pago';
import { VentaService } from 'src/app/service/venta/venta.service';
import Swal from 'sweetalert2';

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

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se han guardado los datos del pago!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  updateDatos() {
    this.modificarDatosPago = !this.modificarDatosPago;
  }
}
