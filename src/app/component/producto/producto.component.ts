import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';

import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';

import { ProductoService } from 'src/app/service/producto/producto.service';

import { Router, ActivatedRoute } from '@angular/router';


import swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  productList:any;

  title: string = 'Listado de productos';
  productos: Producto[] = [];

  // Paginación
  totalItems: number = 0;
  p: number = 1;

  categoria: string = "";
  nombre: string = "";


  constructor( private productoService: ProductoService,
    private cartApi:CarritoapiService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProductos();
    this.productoService.getProductos().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{cantidad:a.cantidad, total:a.precio})
      })
    })
  }


  getProductos(): void {
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;
        this.totalItems = this.productos.length;
      }
    )
  }

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


  addToCarrito(producto:any){
    this.cartApi.addToCart(producto, producto.cant);
    producto.cant=0;
  }


  updateProducto(idProducto: number): void{
    this.productoService.updateProducto(idProducto).subscribe(
      json => {
        this.router.navigate(['/producto'])
        swal.fire('Producto actualizado',`El producto ${json.productos.nombre} fue actualizado`, 'success')
      }
    )

  }
}
