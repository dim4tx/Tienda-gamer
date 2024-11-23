import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // Lista de productos obtenidos del servicio
  products: any[] = [];

  constructor(
    private router: Router,
    private serverservice: ServerService
  ) {}

  ngOnInit(): void {
    this.serverservice.get(`/productos`)
    .subscribe({
      next: (response: any) => {
        this.products = response.data;        
      },
      error: (error: any) => console.error('Error:', error)
    });
    
  }


  // Navegar a la página de detalle del producto
  verDetalle(productId: number): void {
    this.router.navigate(['/detalle-productos', productId]);
  }
}

