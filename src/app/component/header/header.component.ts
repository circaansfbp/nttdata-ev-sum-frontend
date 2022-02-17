import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  totalProductos: number = 0;


constructor(private cartApi: CarritoapiService,private authService:AuthService,
  @Inject(DOCUMENT) private document: Document,private router:Router) {
    this.isAuthenticated = false;
}

public ngOnInit(): void {
  this.cartApi.getProductData().subscribe(res => {
    this.totalProductos = res.length;

  })
  this.authService.isAuthenticated$.subscribe((success: boolean) => {
    this.isAuthenticated = success;
  });
}
public signOut(): void {
  this.authService.logout({
    returnTo: this.document.location.origin,
  });
}
public signIn(): void {
  this.router.navigate(['/productos'])
}
}

