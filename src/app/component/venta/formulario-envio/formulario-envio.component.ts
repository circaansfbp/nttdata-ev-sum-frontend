import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/class/envio';
import { VentaService } from 'src/app/service/venta/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css']
})
export class FormularioEnvioComponent implements OnInit {

  // Para recibir el objeto venta
  envio: Envio = new Envio();

  // Para manejo de modificación de datos
  modificarDatosEnvio: boolean = false;

  constructor( private ventaService: VentaService ) { }

  ngOnInit(): void {
  }

  registrarDatosEnvio() {
    this.modificarDatosEnvio = !this.modificarDatosEnvio
    
    this.ventaService.addEnvio(this.envio);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se han guardado los datos de envío!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  updateDatos() { this.modificarDatosEnvio = !this.modificarDatosEnvio }
}
