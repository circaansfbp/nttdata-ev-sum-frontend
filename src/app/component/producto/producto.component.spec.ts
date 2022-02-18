import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { ProductoComponent } from './producto.component';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Producto } from 'src/app/class/producto';
import { NgModule } from '@angular/core';
import { FiltroPalabrasPipe } from 'src/app/pipes/filtro-palabras.pipe';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';

class MockProductoService {
  getProductos(): Observable<any> {
    const PRODUCTOS = [
      {
        id: 1, nombre: 'shampoo anti-caida', precio: 2000, categoria: 'Cuidado Personal', descripcion: 'shampoo para evitar la perdida de cabello',
      },
      {
        id: 2, nombre: 'Chocolate', precio: 1500, categoria: 'Dulces', descripcion: 'base cacao 60%',
      }
      // {
      //   id: 3, nombre: 'jabon hipoalergenico', precio: 2500, categoria: 'Cuidado Personal', descripcion: 'jabon para el cuerpecito',
      // },
      // {
      //   id: 4, nombre: 'chocolate de almendras', precio: 2000, categoria: 'Dulces', descripcion: 'chocolate con almendras',
      // },
      // {
      //   id: 5, nombre: 'galleta de vino', precio: 500, categoria: 'Dulces', descripcion: 'galletas que no curan',
      // },
      // {
      //   id: 6, nombre: 'bolsa de basura con cierre facil', precio: 3000, categoria: 'Limpieza', descripcion: 'se cierra solita',
      // },
      // {
      //   id: 7, nombre: 'Cat chow delimix', precio: 2890, categoria: 'Mascotas', descripcion: 'Irresistible para tus gatitos',
      // },
      // {
      //   id: 8, nombre: 'Alimento perro adulto Masterdog 15kg', precio: 22090, categoria: 'Mascotas', descripcion: 'Irresistible para tus canes',
      // },
      // {
      //   id: 9, nombre: 'Leche descremada', precio: 1990, categoria: 'Lácteos', descripcion: 'Sin lactosa, 1L, Colun',
      // },
      // {
      //   id: 10, nombre: 'Mantequilla', precio: 2390, categoria: 'Lácteos', descripcion: 'Con sal, 250g',
      // },
      // {
      //   id: 11, nombre: 'Yoghurt natural', precio: 360, categoria: 'Lácteos', descripcion: 'No endulzado, 120g, Colun',
      // }
    ];
    return of(PRODUCTOS);
  }
}

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  let service: ProductoService;
  let resultado: Producto[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoComponent, FiltroPalabrasPipe, FiltroPalabrasPipe],
      imports: [HttpClientTestingModule,RouterTestingModule ],
      providers: [
        CarritoapiService,
        ProductoService
       
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductoService);
  });

  it('Comprobar que el metodo getProductos retorna los datos', () => {
    service.getProductos().subscribe(
      data => {
        expect(component.productos.length).toEqual(2);
      }
    )
  });
});
