import { Component, OnInit } from '@angular/core';

import { CarritoapiService } from 'src/app/service/carritoapi.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalProductos:number =0;
  constructor(private cartApi:CarritoapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalProductos = res.length;
    })


}
