import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { RegistroComponent } from "../../components/registro/registro.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-registro-view',
  standalone: true,
  imports: [NavComponent, RegistroComponent, FooterComponent],
  templateUrl: './registro-view.component.html',
  styleUrl: './registro-view.component.css'
})
export class RegistroViewComponent {

}
