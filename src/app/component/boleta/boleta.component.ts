import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/class/venta';
import { VENTAS } from 'src/app/service/venta/venta.json';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {

  venta: Venta = VENTAS.slice(-1)[0];

  // TEMPORAL
  total: number = 19990;

  constructor() { }

  ngOnInit(): void {
  }

}
