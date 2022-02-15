import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductoComponent } from './component/producto/producto.component';
import { FormularioComponent } from './component/producto/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'productos/editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
