import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductoComponent } from './component/producto/producto.component';
import { CarritoComponent } from './component/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
