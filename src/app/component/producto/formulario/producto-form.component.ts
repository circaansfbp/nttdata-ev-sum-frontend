import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadProducto();
  }

  // Para actualizar, carga los datos del producto
  loadProducto() {
    this.activatedRoute.params.subscribe(
      params => {
        let idProducto = params['id'];

        if (idProducto) {
          this.productoService.getProducto(idProducto).subscribe(
            data => {
              this.producto = data;
            }
          );
        }
      }
    );
  }

  // Crear un nuevo producto
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

  // Actualizar un producto
  public updateProducto(producto: Producto){
    this.productoService.updateProducto(producto).subscribe(
      data => {
        if (data) {
          swal.fire("¡Producto actualizado!", "El producto ha sido modificado exitosamente", "success");
          this.router.navigate(['/productos']);
        }
      }
    );
  }
}
