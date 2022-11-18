import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEstudioComponent } from './en-estudio.component';

describe('EnEstudioComponent', () => {
  let component: EnEstudioComponent;
  let fixture: ComponentFixture<EnEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
