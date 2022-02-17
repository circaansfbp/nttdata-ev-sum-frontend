import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductoFormComponent } from './component/producto/formulario/producto-form.component';
import { ProductoComponent } from './component/producto/producto.component';
import { VentaComponent } from './component/venta/venta.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'productos/form', component: ProductoFormComponent },
  { path: 'productos/editar/:id', component: ProductoFormComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'venta', component: VentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
