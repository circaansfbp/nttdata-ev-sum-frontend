import { Component, OnInit } from '@angular/core';
import { CarritoapiService } from 'src/app/service/carritoapi.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any=[]
  allProductos:any=0;
  constructor(private cartApi:CarritoapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.productos=res;
      this.allProductos=this.cartApi.getTotal();
    })
  }

  removeProduct(producto:any){
    this.cartApi.removeCarritoProduct(producto);
    
  }

  removeAllProduct(){
    this.cartApi.removeCarrito();
  }

}