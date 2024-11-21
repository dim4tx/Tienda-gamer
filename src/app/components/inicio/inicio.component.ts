import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router de Angular
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}  // Inyectamos Router en el constructor

  // Método para redirigir a la página de contacto
  irAContacto() {
    this.router.navigate(['/contacto']); // Redirige a la ruta '/contacto'
  }
}
