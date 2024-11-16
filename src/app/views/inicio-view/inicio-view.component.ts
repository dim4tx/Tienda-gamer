import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InicioComponent } from "../../components/inicio/inicio.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio-view',
  standalone: true,
  imports: [NavComponent, InicioComponent, FooterComponent],
  templateUrl: './inicio-view.component.html',
  styleUrl: './inicio-view.component.css'
})
export class InicioViewComponent {

}
