import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent4Component } from './ben-component4.component';

describe('BenComponent4Component', () => {
  let component: BenComponent4Component;
  let fixture: ComponentFixture<BenComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
