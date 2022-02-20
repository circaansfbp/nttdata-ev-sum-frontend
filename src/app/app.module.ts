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
import { VentaComponent } from './component/venta/venta.component';
import { FormularioPagoComponent } from './component/venta/formulario-pago/formulario-pago.component';
import { FormularioEnvioComponent } from './component/venta/formulario-envio/formulario-envio.component';

import { CarritoComponent } from './component/carrito/carrito.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { FiltroPalabrasPipe } from './pipes/filtro-palabras.pipe';
import { FiltroCategoriaPipe } from './pipes/filtro-categoria.pipe';
import { FiltroPaginacionPipe } from './pipes/filtro-paginacion.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    LoginComponent,
    HeaderComponent,
    CarritoComponent,
    ProductoFormComponent,
    VentaComponent,
    FormularioPagoComponent,
    FormularioEnvioComponent,
    ProfileComponent,
    FiltroPalabrasPipe,
    FiltroCategoriaPipe,
    FiltroPaginacionPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    AuthModule.forRoot(environment.auth0)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
