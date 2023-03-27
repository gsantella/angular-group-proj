import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent2Component } from './ben-component2.component';

describe('BenComponent2Component', () => {
  let component: BenComponent2Component;
  let fixture: ComponentFixture<BenComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
