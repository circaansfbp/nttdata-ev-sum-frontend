import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { ProductoService } from 'src/app/service/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productList: any;

  page: number = 0;
  cantidadCarrito: number = 0;

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

  // Añadir un producto al carrito
  addToCarrito(producto: any) {
    if (this.cantidadCarrito <= 0) {
      Swal.fire("Valor inválido!", "Debes ingresar una cantidad válida de productos.", "error");
      return;
    }

    this.cartApi.addToCart(producto, this.cantidadCarrito);
    this.cantidadCarrito = 0;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto(s) agregados correctamente!',
      showConfirmButton: false,
      timer: 1500
    });
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
