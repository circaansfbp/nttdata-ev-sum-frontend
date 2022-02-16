import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoapiService {

  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(producto:any){
    this.cartDataList.push(...producto);
    this.productList.next(producto);
  }

  addToCart(producto:any){
    this.cartDataList.push(producto);
    this.productList.next(this.cartDataList);
    this.getTotal();
  }

  getTotal(){
    let total=0;
    this.cartDataList.map((a:any)=>{
      total += a.total;
    })
  }

  removeCarritoProduct(producto:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(producto.id==a.id){
        this.cartDataList.splice(index,1)
      }
    })
  }

  removeCarrito(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList)
  }
}
