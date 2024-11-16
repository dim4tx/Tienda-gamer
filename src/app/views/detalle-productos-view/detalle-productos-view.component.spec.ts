import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductosViewComponent } from './detalle-productos-view.component';

describe('DetalleProductosViewComponent', () => {
  let component: DetalleProductosViewComponent;
  let fixture: ComponentFixture<DetalleProductosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProductosViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
