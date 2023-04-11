import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioCombineComponent } from './esempio-combine.component';

describe('EsempioCombineComponent', () => {
  let component: EsempioCombineComponent;
  let fixture: ComponentFixture<EsempioCombineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsempioCombineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsempioCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
