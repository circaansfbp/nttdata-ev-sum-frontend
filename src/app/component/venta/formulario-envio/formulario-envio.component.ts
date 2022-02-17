import { Component, Input, OnInit } from '@angular/core';
import { Envio } from 'src/app/class/envio';
import { Venta } from 'src/app/class/venta';
import { VentaService } from 'src/app/service/venta/venta.service';

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
  }

  updateDatos() { this.modificarDatosEnvio = !this.modificarDatosEnvio }
}
