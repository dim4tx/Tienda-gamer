import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { ProductosComponent } from "../../components/productos/productos.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-productos-view',
  standalone: true,
  imports: [NavComponent, ProductosComponent, FooterComponent],
  templateUrl: './productos-view.component.html',
  styleUrl: './productos-view.component.css'
})
export class ProductosViewComponent {

}
