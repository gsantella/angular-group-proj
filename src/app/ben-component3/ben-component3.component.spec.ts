import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent3Component } from './ben-component3.component';

describe('BenComponent3Component', () => {
  let component: BenComponent3Component;
  let fixture: ComponentFixture<BenComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
