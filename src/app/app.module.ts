import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './component/producto/producto.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';


import { ProductoFormComponent } from './component/producto/formulario/producto-form.component';

import { HttpClientModule } from '@angular/common/http';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { CarritoComponent } from './component/carrito/carrito.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    LoginComponent,
    HeaderComponent,

    CarritoComponent,

    ProductoFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
