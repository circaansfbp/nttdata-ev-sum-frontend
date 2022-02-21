import { NgModule } from '@angular/core';
import { AuthGuard } from '@auth0/auth0-angular';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductoFormComponent } from './component/producto/formulario/producto-form.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ProfileComponent } from './component/profile/profile.component';
import { VentaComponent } from './component/venta/venta.component';
import { BoletaComponent } from './component/boleta/boleta.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ProductoComponent,canActivate: [AuthGuard] },
  { path: 'productos/form', component: ProductoFormComponent,canActivate: [AuthGuard] },
  { path: 'productos/editar/:id', component: ProductoFormComponent,canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent,canActivate: [AuthGuard] },
  { path: 'profile',component: ProfileComponent,canActivate: [AuthGuard]},
  { path: 'signIn', component: LoginComponent },
  { path: 'venta', component: VentaComponent,canActivate: [AuthGuard] },
  { path: 'boleta', component: BoletaComponent },
  { path: '**',redirectTo: 'signIn'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
