import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  // Product list
  products = [
    { 
      id: 1, 
      nombre: 'PC Gamer RTX 4070', 
      precio: 2500.00, 
      imagen: 'https://gtech.systems/wp-content/uploads/2020/02/3a-Copiar.png' 
    },
    { 
      id: 2, 
      nombre: 'Teclado Mecánico RGB', 
      precio: 120.99, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm3wadWtLW-y3z1tOTIHGsNWET68aEmHBiw&s' 
    },
    { 
      id: 3, 
      nombre: 'Mouse Gamer Inalámbrico', 
      precio: 75.50, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWzigLQz1Vg1gNPB0WEJAEKrvd8DolgJVVQ&s' 
    },
    { 
      id: 4, 
      nombre: 'Monitor 4K 144Hz', 
      precio: 450.00, 
      imagen: 'https://www.kalley.com.co/medias/7705946478267-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w5OTU4MnxpbWFnZS93ZWJwfGFESXlMMmd4TkM4eE5ETTJORGt4T0RBeU1qRTNOQzgzTnpBMU9UUTJORGM0TWpZM1h6QXdNbDh4TkRBd1YzZ3hOREF3U0F8NDg1NWM5OTBlY2U1MmNmNmM3NTRjYTc5MzNjZDNmYmJlMzY4OTMxYjY2ZDNjMDg0Njg3OTA2ZDA3NGUwZDlhYg' 
    },
    { 
      id: 5, 
      nombre: 'Auriculares Gamer 7.1', 
      precio: 89.99, 
      imagen: 'https://cdnx.jumpseller.com/urbenmood/image/21188955/resize/635/635?1699984518' 
    },
    { 
      id: 6, 
      nombre: 'Silla Gamer Profesional', 
      precio: 300.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSYbGdlZXI3pKMS6ygU421khuqL7SSvQVWg&s' 
    },
    { 
      id: 7, 
      nombre: 'Controlador Xbox Elite', 
      precio: 160.00, 
      imagen: 'https://blisstechnology.com.co/wp-content/uploads/Control-Xbox-Elite-2.png' 
    },
    { 
      id: 8, 
      nombre: 'Cámara Streaming 1080p', 
      precio: 90.00, 
      imagen: 'https://teknopolis.vtexassets.com/arquivos/ids/205958/4895-1.jpg?v=637842691972830000' 
    },
    { 
      id: 9, 
      nombre: 'Micrófono USB Profesional', 
      precio: 130.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNRKLrFomJLoapObZ1YJPiGzwwsDuCclj4Q&s' 
    },
    { 
      id: 10, 
      nombre: 'Escritorio Gamer RGB', 
      precio: 350.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAPoxFxwZlvglfjfrtz1zwEQNgDBSsLqleA&s' 
    }
  ];

  // Navigate to the product details page
  constructor(private router: Router) {}

  verDetalle(productId: number): void {
    this.router.navigate(['/detalle-productos', productId]);
  }
}
