import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { ContactoComponent } from '../../components/contacto/contacto.component'; 
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-contacto-view',
  standalone: true,
  imports: [NavComponent,ContactoComponent,FooterComponent],
  templateUrl: './contacto-view.component.html',
  styleUrl: './contacto-view.component.css'
})
export class ContactoViewComponent {

}
