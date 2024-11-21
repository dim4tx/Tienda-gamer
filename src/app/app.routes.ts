import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InicioViewComponent } from './views/inicio-view/inicio-view.component';
import { ProductosViewComponent } from './views/productos-view/productos-view.component';
import { DetalleProductosViewComponent } from './views/detalle-productos-view/detalle-productos-view.component';
import { RegistroViewComponent } from './views/registro-view/registro-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ContactoViewComponent } from './views/contacto-view/contacto-view.component'; 
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: "", component: InicioViewComponent},
    {path: "productos", component: ProductosViewComponent},
    {path: "detalle-productos/:id", component: DetalleProductosViewComponent},
    {path: "login", component: LoginViewComponent},
    {path: "registro", component: RegistroViewComponent},
    { path: "contacto", component: ContactoViewComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }