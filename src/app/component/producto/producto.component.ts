import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { PRODUCTOS } from 'src/app/service/producto/producto.json';
import { ProductoService } from 'src/app/service/producto/producto.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productList: any;

  page: number = 0;
  filterPalabra = '';
  filterCategoria = '';
  filterPaginacion = '';
  title: string = 'Listado de productos';

  // Listado de productos
  productos: Producto[] = [];

  // Paginación
  totalItems: number = 0;
  p: number = 1;

  // Filtros
  categoria: string = "";
  nombre: string = "";

  // Para cargar las categorías
  categorias: string[] = [];

  constructor(private productoService: ProductoService,
    private cartApi: CarritoapiService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias();

    this.productoService.getProductos().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {

        Object.assign(a, { cantidad: a.cantidad, total: a.precio })
      })
    })
  }

  // Obtener todos los productos
  getProductos(): void {
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;
        this.totalItems = this.productos.length;
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
  deleteProducto(idProducto: number): void {
    swal.fire({
      title: '¿Estás seguro de que quieres eliminar el producto?',
      text: "¡Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2b8a3e',
      cancelButtonColor: '#c92a2a',
      confirmButtonText: 'Sí, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProducto(idProducto);

        swal.fire(
          '¡Producto eliminado!',
          'El producto ha sido eliminado exitosamente.',
          'success'
        )

        this.getProductos();
      }
    });
  }

  // Añadir un producto al carrito
  addToCarrito(producto: any) {
    this.cartApi.addToCart(producto, producto.cant);
    producto.cant = 0;
  }
   nextPage(){
     this.page+=5;
   }

   prevPage(){
     if(this.page>0){
       this.page-=5;
     }
   }
}
