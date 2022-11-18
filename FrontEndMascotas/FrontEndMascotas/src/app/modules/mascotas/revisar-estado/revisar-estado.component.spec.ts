import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarEstadoComponent } from './revisar-estado.component';

describe('RevisarEstadoComponent', () => {
  let component: RevisarEstadoComponent;
  let fixture: ComponentFixture<RevisarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
