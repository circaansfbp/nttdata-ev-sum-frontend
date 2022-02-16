import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/class/carrito';
import { Producto } from 'src/app/class/producto';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:Producto[]=[]
  allProductos:any=0;
  constructor(private cartApi:CarritoapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.productos=res.productos;
      this.allProductos=res.precioTotalProducto;
      console.log(res)
    })

  }

  removeProduct(producto:any){
    this.cartApi.removeCarritoProduct(producto);
    
  }

  removeAllProduct(){
    this.cartApi.removeCarrito();
  }
  
  saveCarrito(){
    this.cartApi.guardarCarrito()
  }

}
