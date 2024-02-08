import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ContactoComponent } from './componente/contacto/contacto.component';

const routes: Routes = [
  {path:"inicio",component: InicioComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "**", redirectTo: "/inicio", pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
