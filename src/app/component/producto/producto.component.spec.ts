import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { filter, Observable, of } from 'rxjs';
import { ProductoComponent } from './producto.component';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Producto } from 'src/app/class/producto';
import { FiltroPalabrasPipe } from 'src/app/pipes/filtro-palabras.pipe';
import { CarritoapiService } from 'src/app/service/carrito/carritoapi.service';
import { FiltroPaginacionPipe } from 'src/app/pipes/filtro-paginacion.pipe';
import { FiltroCategoriaPipe } from 'src/app/pipes/filtro-categoria.pipe';




describe('ProductoComponent', () => {
    let component: ProductoComponent;
    let fixture: ComponentFixture<ProductoComponent>;
    let service: ProductoService;
    let resultado: Producto[] = [];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductoComponent, FiltroPalabrasPipe, FiltroPaginacionPipe, FiltroCategoriaPipe],
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [
                CarritoapiService,
                ProductoService,
                  
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

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('delete user', () => {
        component.ngOnInit();
        expect(service.deleteProducto(1));
    });

    it('Comprobar que el metodo getProductos retorna los datos', () => {
        service.getProductos().subscribe(
            data => {
                expect(component.productos.length).toEqual(10);
            }
        )
    });

    it('Comprobar que el metodo getCategorias retorna los datos', () => {
        service.getCategorias().subscribe(
            data => {
                expect(component.categorias.length).toEqual(5);
            }
        )
    });
});
