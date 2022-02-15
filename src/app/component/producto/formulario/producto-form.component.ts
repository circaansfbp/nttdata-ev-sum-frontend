import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  title: string = 'Agregar producto';

  // Para editar
  producto: Producto = new Producto();

  constructor( private productoService: ProductoService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  crearProducto(producto: Producto): void {
    this.productoService.createProducto(producto).subscribe(
      data => {
        if (data) {
          swal.fire("¡Producto creado!", "El producto ha sido guardado exitosamente", "success");
          this.router.navigate(['/productos']);
        }
      }
    )
  }
}
