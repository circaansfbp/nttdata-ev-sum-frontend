import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title: string = "Formulario Productos"

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducto();
  }

  public getProducto(): void{
    console.log(this.productoService.getProducto(1));
  }

  public updateProducto(idProducto: number){
    this.productoService.updateProducto(idProducto).subscribe(
      json => {
        this.router.navigate(['/editar'])
        Swal.fire('Producto actualizado',`Producto ${json.producto.nombre} actualizado`, 'success')
      }
    )
  }
}
