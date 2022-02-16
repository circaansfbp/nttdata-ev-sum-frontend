import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnvioComponent } from './formulario-envio.component';

describe('FormularioEnvioComponent', () => {
  let component: FormularioEnvioComponent;
  let fixture: ComponentFixture<FormularioEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
