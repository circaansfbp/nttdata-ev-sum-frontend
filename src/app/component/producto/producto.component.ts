import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { ProductoService } from 'src/app/service/producto/producto.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productList: any;

  cantidadCarrito: number = 0;

  filterPalabra = '';
  filterCategoria = '';
  filterPaginacion = '';
  title: string = 'Listado de productos';

  // Listado de productos
  productos: Producto[] = [];

  // Paginación
  // totalItems: number = 0;
  // p: number = 1;
  page: number = 0;

  // Para cargar las categorías
  categorias: string[] = [];

  constructor(private productoService: ProductoService,
    private cartApi: CarritoapiService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias();

    this.productoService.getProductos().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {

        Object.assign(a, { cantidad: a.cantidad, total: a.precio });
      });
    });
  }

  // Obtener todos los productos
  getProductos(): void {
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;
        console.log(this.productos);
        // this.totalItems = this.productos.length;
      }
    )
  }

  // Obtener las categorías para desplegarlas en el filtro de búsqueda por categoría
  getCategorias() {
    this.productoService.getCategorias().subscribe(
      data => {
        this.categorias = Array.from(data);
      }
    );
  }

  // Eliminar un producto
  // deleteProducto(idProducto: number): void {
  //   swal.fire({
  //     title: '¿Estás seguro de que quieres eliminar el producto?',
  //     text: "¡Esta acción es irreversible!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#2b8a3e',
  //     cancelButtonColor: '#c92a2a',
  //     confirmButtonText: 'Sí, elimínalo!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.productoService.deleteProducto(idProducto);

  //       swal.fire(
  //         '¡Producto eliminado!',
  //         'El producto ha sido eliminado exitosamente.',
  //         'success'
  //       );

  //       this.getProductos();
  //     }
  //   });
  // }

  // Añadir un producto al carrito
  addToCarrito(producto: any) {
    if (this.cantidadCarrito <= 0) {
      swal.fire("Valor inválido!", "Debes ingresar una cantidad válida de productos.", "error");
    }

    this.cartApi.addToCart(producto, this.cantidadCarrito);
    this.cantidadCarrito = 0;
  }
  
  nextPage() {
    this.page += 4;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 4;
    }
  }
}
