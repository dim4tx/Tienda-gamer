import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { DetalleProductosComponent } from "../../components/detalle-productos/detalle-productos.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-detalle-productos-view',
  standalone: true,
  imports: [NavComponent, DetalleProductosComponent, FooterComponent],
  templateUrl: './detalle-productos-view.component.html',
  styleUrl: './detalle-productos-view.component.css'
})
export class DetalleProductosViewComponent {

}
