import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';
@Component({
  selector: 'app-detalle-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-productos.component.html',
  styleUrl: './detalle-productos.component.css'
})
export class DetalleProductosComponent implements OnInit{
  productoId: number | null = null;
  productoDetalle: any = {};
  productos = [
    { 
      id: 1, 
      nombre: 'PC Gamer RTX 4070', 
      precio: 2500.00, 
      imagen: 'https://gtech.systems/wp-content/uploads/2020/02/3a-Copiar.png' ,
      descripcion: 'PC gamer de alto rendimiento equipada con tarjeta gráfica RTX 4070 y procesador Intel Core i7.',
      color: 'Negro', 
      tamaño: '45x40x20 cm', 
      peso: '8 kg', 
      garantia: '2 años', 
      stock: 10 
    },
    { 
      id: 2, 
      nombre: 'Teclado Mecánico RGB', 
      precio: 120.99, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm3wadWtLW-y3z1tOTIHGsNWET68aEmHBiw&s' ,
      descripcion: 'Teclado mecánico con retroiluminación RGB personalizable y switches de alta durabilidad.',
      color: 'Negro con RGB', 
      tamanio: '40x15x5 cm', 
      peso: '1.2 kg', 
      garantia: '1 año', 
      stock: 25 
    },
    { 
      id: 3, 
      nombre: 'Mouse Gamer Inalámbrico', 
      precio: 75.50, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWzigLQz1Vg1gNPB0WEJAEKrvd8DolgJVVQ&s' ,
      descripcion: 'Mouse inalámbrico con sensor óptico de alta precisión y diseño ergonómico.',
      color: 'Negro', 
      tamanio: '12x6x4 cm', 
      peso: '200 g', 
      garantia: '1 año', 
      stock: 30 
    },
    { 
      id: 4, 
      nombre: 'Monitor 4K 144Hz', 
      precio: 450.00, 
      imagen: 'https://www.kalley.com.co/medias/7705946478267-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w5OTU4MnxpbWFnZS93ZWJwfGFESXlMMmd4TkM4eE5ETTJORGt4T0RBeU1qRTNOQzgzTnpBMU9UUTJORGM0TWpZM1h6QXdNbDh4TkRBd1YzZ3hOREF3U0F8NDg1NWM5OTBlY2U1MmNmNmM3NTRjYTc5MzNjZDNmYmJlMzY4OTMxYjY2ZDNjMDg0Njg3OTA2ZDA3NGUwZDlhYg' ,
      descripcion: 'Monitor 4K UHD con una tasa de refresco de 144Hz para una experiencia de juego fluida.',
      color: 'Negro', 
      tamanio: '70x50x15 cm', 
      peso: '7 kg', 
      garantia: '3 años', 
      stock: 15 
    },
    { 
      id: 5, 
      nombre: 'Auriculares Gamer 7.1', 
      precio: 89.99, 
      imagen: 'https://cdnx.jumpseller.com/urbenmood/image/21188955/resize/635/635?1699984518' ,
      descripcion: 'Auriculares gamer con sonido envolvente 7.1 y micrófono ajustable.',
      color: 'Negro con detalles azules', 
      tamanio: '20x18x10 cm', 
      peso: '350 g', 
      garantia: '1 año', 
      stock: 40 
    },
    { 
      id: 6, 
      nombre: 'Silla Gamer Profesional', 
      precio: 300.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSYbGdlZXI3pKMS6ygU421khuqL7SSvQVWg&s' ,
      descripcion: 'Silla ergonómica con soporte lumbar ajustable y reposabrazos 4D.',
      color: 'Negro con rojo', 
      tamanio: '120x65x60 cm', 
      peso: '15 kg', 
      garantia: '2 años', 
      stock: 5 
    },
    { 
      id: 7, 
      nombre: 'Controlador Xbox Elite', 
      precio: 160.00, 
      imagen: 'https://blisstechnology.com.co/wp-content/uploads/Control-Xbox-Elite-2.png' ,
      descripcion: 'Controlador premium con botones personalizables y conexión inalámbrica.',
      color: 'Negro mate', 
      tamanio: '15x10x5 cm', 
      peso: '300 g', 
      garantia: '1 año', 
      stock: 20 
    },
    { 
      id: 8, 
      nombre: 'Cámara Streaming 1080p', 
      precio: 90.00, 
      imagen: 'https://teknopolis.vtexassets.com/arquivos/ids/205958/4895-1.jpg?v=637842691972830000' ,
      descripcion: 'Cámara web Full HD 1080p con micrófono integrado y enfoque automático.',
      color: 'Negro', 
      tamanio: '8x5x5 cm', 
      peso: '150 g', 
      garantia: '1 año', 
      stock: 50 
    },
    { 
      id: 9, 
      nombre: 'Micrófono USB Profesional', 
      precio: 130.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNRKLrFomJLoapObZ1YJPiGzwwsDuCclj4Q&s' , 
      descripcion: 'Micrófono USB con calidad de estudio y soporte antivibraciones.',
      color: 'Negro', 
      tamanio: '25x8x8 cm', 
      peso: '1 kg', 
      garantia: '1 año', 
      stock: 10 
    },
    { 
      id: 10, 
      nombre: 'Escritorio Gamer RGB', 
      precio: 350.00, 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAPoxFxwZlvglfjfrtz1zwEQNgDBSsLqleA&s' ,
      descripcion: 'Escritorio con iluminación RGB integrada y soporte para accesorios gamer.',
      color: 'Negro', 
      tamanio: '120x60x75 cm', 
      peso: '20 kg', 
      garantia: '2 años', 
      stock: 8 
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productoId = +params['id'];
      this.productoDetalle = this.productos.find(product => product.id === this.productoId);
    });
  }
}
