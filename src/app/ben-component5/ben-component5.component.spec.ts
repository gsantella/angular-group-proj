import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent5Component } from './ben-component5.component';

describe('BenComponent5Component', () => {
  let component: BenComponent5Component;
  let fixture: ComponentFixture<BenComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
