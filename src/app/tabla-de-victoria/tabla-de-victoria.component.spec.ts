import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeVictoriaComponent } from './tabla-de-victoria.component';

describe('TablaDeVictoriaComponent', () => {
  let component: TablaDeVictoriaComponent;
  let fixture: ComponentFixture<TablaDeVictoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeVictoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeVictoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
