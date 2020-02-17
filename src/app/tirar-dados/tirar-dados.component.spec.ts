import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirarDadosComponent } from './tirar-dados.component';

describe('TirarDadosComponent', () => {
  let component: TirarDadosComponent;
  let fixture: ComponentFixture<TirarDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirarDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
