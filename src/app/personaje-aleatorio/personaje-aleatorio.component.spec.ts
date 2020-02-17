import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeAleatorioComponent } from './personaje-aleatorio.component';

describe('PersonajeAleatorioComponent', () => {
  let component: PersonajeAleatorioComponent;
  let fixture: ComponentFixture<PersonajeAleatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeAleatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
