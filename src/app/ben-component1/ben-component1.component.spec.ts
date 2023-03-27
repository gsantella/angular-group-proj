import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent1Component } from './ben-component1.component';

describe('BenComponent1Component', () => {
  let component: BenComponent1Component;
  let fixture: ComponentFixture<BenComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
